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
llm = ChatGroq(model="llama3-70b-8192")

qa_chain = RetrievalQA.from_chain_type(llm=llm, retriever=retriever, chain_type="stuff")

def get_advice(user_project_nl):
    prompt = f"""
    Here is a software project profile:

    {user_project_nl}

    The current predicted success score is low. Based on similar past successful projects,
    suggest practical improvements to help this project reach a success score.

    Be specific and actionable.
    """

    raw_response = qa_chain.invoke(prompt)["result"]

    # Extract bullet points using regex
    bullet_points = re.findall(r'\d+\.\s\*\*(.*?)\*\*: (.*?)\n', raw_response)

    structured = [{"title": title.strip(), "suggestion": desc.strip()} for title, desc in bullet_points]

    return structured
