# SoftSight-Web

This repository contains the web interface and backend services for **SoftSight**, a tool that predicts the success of software projects and provides AI-driven advice for improvement. It serves as the user-facing part of the SoftSight project, interacting with a separate machine learning model repository.

## 🌟 Key Features

-   **Frontend:** A modern, responsive user interface built with **Next.js** and **TypeScript**.
-   **Backend:** A powerful backend API developed with **Python** and **Flask**.
-   **Predictive Insights:** Utilizes a machine learning model to forecast project success scores.
-   **AI-Powered Advice:** Employs a Retrieval Augmented Generation (RAG) system with a Large Language Model (LLM) to provide actionable suggestions.
-   **Visual Analytics:** Presents prediction results and insights in a user-friendly and intuitive way.
-   **Modular Architecture:** Designed for easy maintenance and scalability.

## 🏛️ Architecture

The SoftSight web application is composed of two main parts:

1.  **Frontend:** A [Next.js](https://nextjs.org/) application responsible for the user interface. It provides a form for users to input project details and displays the results.
2.  **Backend:** A [Flask](https://flask.palletsprojects.com/) application that exposes a REST API. It receives data from the frontend, processes it using a machine learning model, and generates advice using an LLM.

The frontend and backend communicate via HTTP requests. The backend also interacts with a separate machine learning model and a vector database for the RAG system.

## 🚀 Getting Started

To get the full application running, you will need to set up both the frontend and the backend.

### Prerequisites

-   [Node.js](https://nodejs.org/) (v18 or later)
-   [Python](https://www.python.org/) (v3.9 or later)
-   [pip](https://pip.pypa.io/en/stable/installation/)

### Installation and Running

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/softsight-web.git
    cd softsight-web
    ```

2.  **Set up and run the backend:**

    Navigate to the `backend` directory and follow the instructions in its `README.md` file.

    ```bash
    cd backend
    # Follow backend setup instructions
    cd ..
    ```

3.  **Set up and run the frontend:**

    Navigate to the `frontend` directory and follow the instructions in its `README.md` file.

    ```bash
    cd frontend
    # Follow frontend setup instructions
    ```

Once both the frontend and backend servers are running, you can access the application in your browser at `http://localhost:3000`.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you have any suggestions or find any bugs.