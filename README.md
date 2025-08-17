# ROLEMET - AI Resume Strength Analyzer

Rolemet is an AI-powered resume analysis and career guidance platform that evaluates user resumes, generates ATS-friendly scores, and offers personalized feedback to improve job readiness. It also provides intelligent job recommendations and a chatbot for real-time career assistance using NLP and LLM technologies.

---

## Features

### 1. **AI-Based Resume Scoring**
- Users can upload their resume and receive an ATS-friendly score powered by NLP models.

### 2. **Detailed Feedback & Suggestions**
- Get structured, section-wise feedback to improve clarity, relevance, and formatting.

### 3. **Personalized Job Recommendations**
- Uses prompt-based search to fetch relevant job listings via live APIs.

### 4. **Interactive Career Chatbot**
- LLM-powered chatbot for real-time Q&A, career advice, and guidance.

### 5. **User-Friendly Dashboard**
- Clean UI built with React for uploading resumes, viewing analytics, and tracking improvements.

### 6. **Seamless Backend Integration**
- Express.js server integrated with LangFlow and SerpAPI for smooth AI operations.
---

## Technology Stack

### **Frontend**
- **React**: Used to create a responsive and dynamic user interface.
- **Tailwind CSS**: For styling components with a modern and consistent look.
- **React Router**: Enables seamless navigation between different pages.

### **Backend**
- **Express.js**: Serves as the backend framework to handle API requests and responses.
- **LangFlow**: Facilitates natural language understanding and data querying.
- **SerpAPI**: Integrates SerpAPI to fetch real-time, relevant job listings from Google based on AI-generated search queries.

---

## Installation and Setup

### Prerequisites
- **Node.js** (v16+)
- **npm** or **yarn**
- **AstraDB Account**

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/prem-d-25/tea-insights.git
   cd tea-insights
   ```

2. **Install Dependencies**
   - For the frontend:
     ```bash
     cd client
     npm install
     ```
   - For the backend:
     ```bash
     cd server
     npm install
     ```

3. **Set Up AstraDB**
   - Create an account on [AstraDB](https://www.datastax.com/astra).
   - Set up a vector database and update the configuration in the backend.

4. **Configure LangFlow**
   - Install and set up LangFlow for natural language understanding.
   - Update the API endpoint in the backend configuration.

5. **Run the Application**
   - Start the backend server:
     ```bash
     cd server
     npm start
     ```
   - Start the frontend development server:
     ```bash
     cd client
     npm run dev
     ```

---

## Usage

1. **Upload Resume**:
   - Navigate to the homepage and upload your Resume.
   - Wait for the file to be processed.

2. **View Score and Suggestions**:
   - Access the score and suggestions generated based on your resume and job description.

3. **Interact with the AI Chatbot**:
   - Ask questions about your data through the chatbot interface to get deeper insights.

---

## Folder Structure
```
project-root
├── client
│   ├── src
│   │   ├── component
|   |   ├── pages
|   |   ├── router
|   |   ├── store
│   │   └── App.js
├── server
│   ├── controllers
│   ├── middlewares
│   ├── models
│   ├── router
│   ├── utils
│   ├── validator
│   └── server.js
├── README.md
└── package.json
```
---


