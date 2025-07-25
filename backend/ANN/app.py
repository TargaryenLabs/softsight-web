from flask import Flask, request, jsonify
import pandas as pd
import numpy as np
from flask_cors import CORS
import joblib
from tensorflow.keras.models import load_model

app = Flask(__name__)
CORS(app)

# Load ANN model and OneHotEncoder
model = load_model('project_success_ann.h5')  # ANN model
encoder = joblib.load('onehot_encoder.pkl')   # Same encoder used for training
scaler = joblib.load('minmax_scaler.pkl')


# Define categorical and numeric features
categorical_cols = [
    'project_complexity', 'scope_clarity', 'urgency_level', 'org_structure_type',
    'client_priority', 'team_sdlc_knowledge', 'user_involvement', 'tool_familiarity',
    'tech_stack_familiarity', 'testing_strategy', 'on_schedule', 'communication_quality',
    'risk_management_score', 'control_mechanism'
]

boolean_cols = ['legacy_system_involved']  # Treat separately
numeric_cols = ['avg_dev_experience', 'pm_experience', 'budget_estimation']


@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        input_df = pd.DataFrame([data])

        # Normalize and correct case
        for col in categorical_cols:
            input_df[col] = input_df[col].astype(str).str.strip().str.lower()
        
        if 'on_schedule' in input_df.columns:
            input_df['on_schedule'] = input_df['on_schedule'].str.strip().str.lower()
        
        if 'legacy_system_involved' in input_df.columns:
            # Handle boolean separately before encoding
            input_df['legacy_system_involved'] = input_df['legacy_system_involved'].str.lower().map({'true': True, 'false': False})


        input_df[numeric_cols] = scaler.transform(input_df[numeric_cols].apply(pd.to_numeric))

        # One-hot encode categorical features
        encoded_cats = encoder.transform(input_df[categorical_cols])
        encoded_cat_df = pd.DataFrame(encoded_cats, columns=encoder.get_feature_names_out(categorical_cols))


        # Merge with numeric features
        final_input = pd.concat([
        input_df[numeric_cols].reset_index(drop=True),
        input_df[boolean_cols].astype(int).reset_index(drop=True),  # Convert boolean to 0/1
        encoded_cat_df.reset_index(drop=True)
        ], axis=1)

        final_input = final_input.to_numpy()

        # Predict using ANN
        probability = model.predict(final_input)[0][0]
        prediction = 'YES' if probability >= 0.5 else 'NO'

        return jsonify({
            'prediction': prediction,
            'probability': int(probability * 100)
        })

    except Exception as e:
        print("❌ Error during prediction:", str(e))
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
