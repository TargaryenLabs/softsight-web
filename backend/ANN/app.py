from flask import Flask, request, jsonify
from flask_cors import CORS
# from ann_model import predict_success
from llm_advisor import get_advice

app = Flask(__name__)
CORS(app)

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
        # success_score = predict_success(data)

        user_nl = generate_nl_summary(data, 20)
        suggestions = get_advice(user_nl)

        return jsonify({
            "prediction": 20,
            # "probability": int(success_score * 100),
            "suggestions": suggestions
        })

    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
if __name__ == '__main__':
    app.run(debug=True)

