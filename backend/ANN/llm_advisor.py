from dotenv import load_dotenv
from langchain_community.vectorstores import Chroma
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_groq import ChatGroq
from langchain.chains import RetrievalQA
import re

load_dotenv()

embedding_model = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
vectorstore = Chroma(persist_directory="./rag_db", embedding_function=embedding_model)
retriever = vectorstore.as_retriever(search_kwargs={"k": 3})
llm = ChatGroq(model="openai/gpt-oss-120b")

qa_chain = RetrievalQA.from_chain_type(llm=llm, retriever=retriever, chain_type="stuff")

def get_advice(user_project_nl,context=""):
    prompt = f"""
    Context from similar projects:
    {context}

    Here is the new project profile:
    {user_project_nl}

    The current predicted success score is low.
    Based on similar past successful projects, suggest practical improvements.
    
    Return advice in bullet points.
    """

    raw_response = qa_chain.invoke(prompt)["result"]
    structured = []
    lines = raw_response.split('\n')
    current_item = None

    for line in lines:
        # Match main bullet with bold title
        title_match = re.match(r'^-\s+\*\*(.*?)\*\*\s*$', line)
        if title_match:
            if current_item:
                structured.append(current_item)
            current_item = {
                "title": title_match.group(1).strip(),
                "suggestion": ""
            }
        # Match sub-bullet (description lines)
        elif current_item and line.strip().startswith('-'):
            desc = line.strip()[1:].strip()  # Remove leading '-'
            if current_item["suggestion"]:
                current_item["suggestion"] += " " + desc
            else:
                current_item["suggestion"] = desc

    # Don't forget the last item
    if current_item:
        structured.append(current_item)

    return structured
