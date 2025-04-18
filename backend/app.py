from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np
import pandas as pd

app = Flask(__name__)
CORS(app)

# Load the trained model
model = joblib.load("model.pkl")

# Expected features in correct order (from one-hot encoded training set)
FEATURE_ORDER = [
    'avg_dev_experience', 'pm_experience', 'legacy_system_involved', 'budget_estimation',
    'project_complexity_High', 'project_complexity_Low', 'project_complexity_Medium',
    'scope_clarity_Clear', 'scope_clarity_Medium', 'scope_clarity_Vague',
    'urgency_level_High', 'urgency_level_Low', 'urgency_level_Medium',
    'org_structure_type_Functional', 'org_structure_type_Matrix', 'org_structure_type_Projectized',
    'client_priority_Cost', 'client_priority_Quality', 'client_priority_Time',
    'team_sdlc_knowledge_High', 'team_sdlc_knowledge_Low', 'team_sdlc_knowledge_Medium',
    'user_involvement_High', 'user_involvement_Low', 'user_involvement_Medium',
    'tool_familiarity_High', 'tool_familiarity_Low', 'tool_familiarity_Medium',
    'tech_stack_familiarity_High', 'tech_stack_familiarity_Low', 'tech_stack_familiarity_Medium',
    'testing_strategy_Automated', 'testing_strategy_Manual', 'testing_strategy_Mixed',
    'on_schedule_NO', 'on_schedule_YES',
    'communication_quality_Average', 'communication_quality_Good', 'communication_quality_Poor',
    'risk_management_score_High', 'risk_management_score_Low', 'risk_management_score_Medium',
    'control_mechanism_Moderate', 'control_mechanism_Strong', 'control_mechanism_Weak'
]

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        
        # Create a zeroed feature vector with all expected features
        input_vector = pd.DataFrame([np.zeros(len(FEATURE_ORDER))], columns=FEATURE_ORDER)

        # Fill in the values from the incoming JSON
        for key, value in data.items():
            if key in input_vector.columns:
                input_vector[key] = float(value) if key in ['avg_dev_experience', 'pm_experience', 'budget_estimation'] else 1.0
        
        # Make prediction
        prediction = model.predict(input_vector)[0]

        return jsonify({'prediction': round(float(prediction), 4)})
    
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
