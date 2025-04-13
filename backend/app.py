from flask import Flask, request, render_template, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    print(data)
    prediction = 20
    return jsonify({'prediction':prediction})


if __name__ == '__main__':
    app.run(debug=True)

# ml model code 
# import joblib

# model = joblib.load('model.pkl')
# features = [
#     float(data['feature1']),
#     float(data['feature2']),
#     add all the fatures
# ]

# prediction = model.predict([features])[0]