from flask import Flask, request, jsonify
from flask_cors import CORS
# from ann_model import predict_success
from llm_advisor import get_advice
import random
from dotenv import load_dotenv
from langchain_community.vectorstores import Chroma
from langchain_huggingface import HuggingFaceEmbeddings

app = Flask(__name__)
CORS(app)

load_dotenv()
embedding_model = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
vectorstore = Chroma(persist_directory="./rag_db", embedding_function=embedding_model)
retriever = vectorstore.as_retriever()
print("COLLECTION COUNT:", vectorstore._collection.count())

def generate_nl_summary(data, success_score):
    return f"""
    Project with {data['project_complexity']} complexity, {data['scope_clarity']} scope, and {data['urgency_level']} urgency.
    Organizational structure was {data['org_structure_type']}, client prioritized {data['client_priority']}.
    Avg dev experience: {data['avg_dev_experience']} years, PM experience: {data['pm_experience']} years.
    Team SDLC knowledge: {data['team_sdlc_knowledge']}.
    User involvement: {data['user_involvement']}. Tool familiarity: {data['tool_familiarity']}.
    Legacy system: {data['legacy_system_involved']}.
    Tech stack familiarity: {data['tech_stack_familiarity']}.
    Testing strategy: {data['testing_strategy']}.
    On schedule: {data['on_schedule']}.
    Budget: {data['budget_estimation']}.
    Communication: {data['communication_quality']}.
    Risk management: {data['risk_management_score']}.
    Controls: {data['control_mechanism']}.
    success score : {success_score}
    """


@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        user_nl = generate_nl_summary(data, 0)  # Score not used yet

        # 🔍 Similarity search with score (returns list of tuples: (doc, score))
        similar_docs = vectorstore.similarity_search_with_score(user_nl, k=3)
        retrieved_texts = [doc.page_content for doc, _ in similar_docs]
        top_score = similar_docs[0][1] if similar_docs else random.uniform(0.3, 0.7)

        # 🧠 Generate suggestions using top retrieved context
        context = "\n\n".join(retrieved_texts)
        suggestions = get_advice(user_nl, context)
        print(suggestions)

        return jsonify({
            "prediction": int(top_score*100),
            "suggestions": suggestions
        })

    except Exception as e:
        return jsonify({'error': str(e)}), 500


    
if __name__ == '__main__':
    app.run(debug=True)

