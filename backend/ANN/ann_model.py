from tensorflow.keras.models import load_model
import joblib
import numpy as np
import pandas as pd

# Load once
model = load_model("project_success_ann.keras")
encoder = joblib.load("onehot_encoder.pkl")
scaler = joblib.load("minmax_scaler.pkl")

# Define categorical and numeric features
categorical_cols = [
    'project_complexity', 'scope_clarity', 'urgency_level', 'org_structure_type',
    'client_priority', 'team_sdlc_knowledge', 'user_involvement', 'tool_familiarity',
    'tech_stack_familiarity', 'testing_strategy', 'on_schedule', 'communication_quality',
    'risk_management_score', 'control_mechanism'
]

boolean_cols = ['legacy_system_involved']  
numeric_cols = ['avg_dev_experience', 'pm_experience', 'budget_estimation']

def predict_success(input_data: dict):
    input_df = pd.DataFrame([input_data])

    # Preprocess
    for col in categorical_cols:
        input_df[col] = input_df[col].astype(str).str.strip().str.lower()
    input_df['on_schedule'] = input_df['on_schedule'].str.lower()
    input_df['legacy_system_involved'] = input_df['legacy_system_involved'].str.lower().map({'true': True, 'false': False})
    input_df[numeric_cols] = scaler.transform(input_df[numeric_cols].apply(pd.to_numeric))

    encoded_cats = encoder.transform(input_df[categorical_cols])
    encoded_cat_df = pd.DataFrame(encoded_cats, columns=encoder.get_feature_names_out(categorical_cols))

    final_input = pd.concat([
        input_df[numeric_cols].reset_index(drop=True),
        input_df[boolean_cols].astype(int).reset_index(drop=True),
        encoded_cat_df.reset_index(drop=True)
    ], axis=1).to_numpy()

    probability = model.predict(final_input)[0][0]
    return round(probability, 2)
