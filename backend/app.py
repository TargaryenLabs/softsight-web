from flask import Flask, request, jsonify
import pandas as pd
import numpy as np
import joblib
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load trained model and OneHotEncoder
model = joblib.load('model.pkl')
encoder = joblib.load('onehot_encoder.pkl')

# Define categorical and numeric features separately
categorical_cols = ['project_complexity', 'scope_clarity', 'urgency_level', 
                    'org_structure_type', 'client_priority', 'team_sdlc_knowledge',
                    'user_involvement', 'tool_familiarity', 'tech_stack_familiarity',
                    'testing_strategy', 'on_schedule', 'communication_quality', 
                    'risk_management_score', 'control_mechanism','legacy_system_involved']

numeric_cols = ['avg_dev_experience', 'pm_experience', 'budget_estimation']

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()

        # Convert JSON to DataFrame
        input_df = pd.DataFrame([data])

        # Fix case for categorical columns to match training format
        for col in categorical_cols:
            input_df[col] = input_df[col].astype(str).str.capitalize()

        # Standardize on_schedule to match encoder (expects all caps)
        if 'on_schedule' in input_df.columns:
            input_df['on_schedule'] = input_df['on_schedule'].str.upper()

        # Convert legacy_system_involved to boolean
        if 'legacy_system_involved' in input_df.columns:
            input_df['legacy_system_involved'] = input_df['legacy_system_involved'].str.lower().map({'true': True, 'false': False})



        # Ensure numeric columns are converted properly
        input_df[numeric_cols] = input_df[numeric_cols].apply(pd.to_numeric)

        # One-hot encode
        encoded_cats = encoder.transform(input_df[categorical_cols])
        encoded_cat_df = pd.DataFrame(encoded_cats, columns=encoder.get_feature_names_out(categorical_cols))

        # Merge numeric and encoded data
        final_input = pd.concat([input_df[numeric_cols].reset_index(drop=True), encoded_cat_df], axis=1)

        print("✅ Processed input vector:", final_input.to_dict(orient="records"))

        # Predict
        prediction = model.predict(final_input)[0]
        prediction_proba = model.predict_proba(final_input)[0][1]

        return jsonify({
            'prediction': 'YES' if prediction == 1 else 'NO',
            'probability': int(float(prediction_proba)*100)
        })

    except Exception as e:
        print("❌ Error during prediction:", str(e))
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)
