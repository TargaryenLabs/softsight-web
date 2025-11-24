# Backend

This directory contains the backend of the SoftSight web application. It is a Python-based API built with [Flask](https://flask.palletsprojects.com/) that provides prediction and advisory services to the frontend.

## ✨ Features

-   **REST API:** Exposes endpoints for predicting project success and getting AI-powered advice.
-   **Machine Learning Integration:** Loads a pre-trained `scikit-learn` model to make predictions.
-   **LLM-Powered Advice:** Uses a Retrieval Augmented Generation (RAG) pipeline with [LangChain](https://www.langchain.com/) and a Hugging Face model to generate advice.
-   **Vector Database:** Utilizes [Chroma](https://www.trychroma.com/) as a vector store for the RAG system.

## 🛠️ Technologies Used

-   **[Flask](https://flask.palletsprojects.com/):** A lightweight web framework for Python.
-   **[scikit-learn](https://scikit-learn.org/):** For loading and using the machine learning model.
-   **[LangChain](https://www.langchain.com/):** A framework for developing applications powered by language models.
-   **[Hugging Face Transformers](https://huggingface.co/transformers/):** For the sentence-transformer model used for embeddings.
-   **[Chroma](https://www.trychroma.com/):** An open-source embedding database.
-   **[Mangum](https://github.com/jordaneremieff/mangum):** To handle AWS Lambda events.

## 🚀 Getting Started

### Prerequisites

-   [Python](https://www.python.org/) (v3.9 or later)
-   [pip](https://pip.pypa.io/en/stable/installation/)

### Installation

1.  **Navigate to the `backend` directory:**

    ```bash
    cd backend
    ```

2.  **Create a virtual environment (recommended):**

    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
    ```

3.  **Install dependencies:**

    ```bash
    pip install -r requirements.txt
    ```

### Running the Server

Once the dependencies are installed, you can run the Flask development server:

```bash
flask run
```

This will start the backend server on `http://127.0.0.1:5000`.

## 📦 API Endpoints

### `POST /predict`

This is the main endpoint for getting a project success prediction and advice.

-   **Request Body:** A JSON object containing the project details.
-   **Response:** A JSON object with the following properties:
    -   `prediction`: The project success score (an integer between 0 and 100).
    -   `suggestions`: AI-generated advice for the project.

**Example Request:**

```json
{
    "project_complexity": "Medium",
    "scope_clarity": "High",
    "urgency_level": "Low",
    "org_structure_type": "Matrix",
    "client_priority": "Medium",
    "avg_dev_experience": 5,
    "pm_experience": 10,
    "team_sdlc_knowledge": "High",
    "user_involvement": "Medium",
    "tool_familiarity": "High",
    "legacy_system_involved": "false",
    "tech_stack_familiarity": "High",
    "testing_strategy": "Automated",
    "on_schedule": "YES",
    "budget_estimation": 100000,
    "communication_quality": "Good",
    "risk_management_score": "Medium",
    "control_mechanism": "High"
}
```

**Example Response:**

```json
{
    "prediction": 85,
    "suggestions": "Given the project's parameters, consider focusing on improving user involvement to further increase the chances of success..."
}
```
## 🧠 Model and RAG

-   **`model.pkl`:** A pre-trained `scikit-learn` model for predicting project success.
-   **`onehot_encoder.pkl`:** The OneHotEncoder used to preprocess the categorical features for the model.
-   **`rag_db/`:** The Chroma vector database containing the knowledge base for the RAG system.
-   **`llm_advisor.py`:** Contains the logic for the RAG pipeline and for generating advice using the LLM.
