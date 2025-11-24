# Frontend

This directory contains the frontend of the SoftSight web application, built with [Next.js](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/), and [Tailwind CSS](https://tailwindcss.com/).

## ✨ Features

-   **Interactive Form:** A user-friendly form for inputting software project details.
-   **Dynamic Results Page:** Displays the project success prediction and AI-generated advice.
-   **Responsive Design:** The UI is designed to work on various screen sizes.
-   **Component-Based Architecture:** The code is organized into reusable React components.

## 🛠️ Technologies Used

-   **[Next.js](https://nextjs.org/):** A React framework for server-side rendering and static site generation.
-   **[TypeScript](https://www.typescriptlang.org/):** A typed superset of JavaScript that enhances code quality and maintainability.
-   **[React](https://reactjs.org/):** A JavaScript library for building user interfaces.
-   **[Tailwind CSS](https://tailwindcss.com/):** A utility-first CSS framework for rapid UI development.
-   **[Framer Motion](https://www.framer.com/motion/):** For animations and transitions.
-   **[React Icons](https://react-icons.github.io/react-icons/):** A library of popular icon sets.

## 🚀 Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/) (v18 or later)
-   The backend server must be running. See the [backend `README.md`](../backend/README.md) for instructions.

### Installation

1.  **Navigate to the `frontend` directory:**

    ```bash
    cd frontend
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

### Running the Development Server

Once the dependencies are installed, you can run the development server:

```bash
npm run dev
```

This will start the frontend application on `http://localhost:3000`. The page will automatically reload as you make changes to the code.

## 📁 Project Structure

-   **`src/app/`:** Contains the main pages of the application, including the home page, about page, and results page.
-   **`src/components/`:** Contains reusable React components used throughout the application.
-   **`src/pages/`:** Contains the main page components that are rendered by the routes in `src/app`.
-   **`public/`:** Contains static assets such as images and fonts.
-   **`tailwind.config.js`:** The configuration file for Tailwind CSS.
-   **`next.config.ts`:** The configuration file for Next.js.
