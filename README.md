# AmritaGPT
AmritaGPT is a chatbot designed to answer all Amrita Viswa Vidyapeetham related questions, covering topics such as clubs, placements, entrance exams, and more. The system facilitates text-to-text conversation as well as speech-to-text and text-to-speech functionalities. 🤖📚🎙️


## Prototype
![figma prototype](/assets/prototype_image.png)

### Demo
<video controls>
<source  src="./assets/demo_video.mp4" type="video/mp4">
</video>

## Implementation
- AmritaGPT collects data from various sources including the Amrita website, Quora, and other relevant platforms. This data is utilized by a RAG-based Large Language Model (LLM) to generate responses. The project relies on LLAMA 3/Gemini model, FAISS, and Langchain for its functionality. The API gateway is powered by FastAPI, with temporary use of ngrok. 🌐🛠️

- For speech-to-text conversion, Whisper is employed, which sends the input to the LLM. gTTS is then used to convert the generated text into speech. 🔊🗣️

- The front-end is developed using React.js, while Flask is used for backend operations. The web UI and system integration are currently under development and will be completed shortly. 💻⚙️

# Chatbot API runninng

This Section explains how to set up, run, and interact with the chatbot API.

---

## Prerequisites

1. **Python**: Install Python 3.9 or higher.
2. **Dependencies**: Ensure the required Python packages are installed.
3. **Environment File**: Create a `.env` file and add your gemini and huggingface key.
4. **Text Data**: Ensure a text file named `general.txt` exists in the root directory containing the knowledge base.
5. **Models**:
   - HuggingFace `sentence-transformers/all-MiniLM-L6-v2`
   - Google Generative AI Embeddings (`embedding-001`)
   - Meta Llama `Llama-3-8B-Instruct`

---

## Installation

1. Clone the repository:
    ```bash
    git clone <repository_url>
    cd <repository_directory>
    ```

2. Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```

3. Configure the `.env` file:
    ```env
    GOOGLE_API_KEY=<your_google_api_key>
    HF_API_TOKEN = <your token>
    ```

---

## Running the API

1. **Start the server**:
    ```bash
    python api.py
    ```

2. The API will be available at:
    ```
    http://127.0.0.1:8000
    ```

---

## Endpoints

### **`POST /get-response/`**
- **Description**: Get chatbot response.
- **Request Body**:
    ```json
    {
        "session_id": "<optional_session_id>",
        "input_text": "<user_question>",
        "use_google": false
    }
    ```
    - `session_id` (optional): Reuse a session ID for conversation continuity.
    - `input_text`: The user query.
    - `use_google`: Use Google Generative AI (`true`) or HuggingFace (`false`).

- **Response**:
    ```json
    {
        "session_id": "<session_id>",
        "response": "<bot_response>",
        "history": [
            {"user": "<input_text>"},
            {"bot": "<response_text>"}
        ]
    }
    ```

---

## Features

- **Chat History**: Maintains context from the last two exchanges.
- **Embedding Models**: Supports both HuggingFace and Google Generative AI embeddings.
- **Custom Prompts**: Tailored for educational use cases.

---


## Customization

1. **Change Models**:
    - Update the `model_name` for HuggingFace embeddings in:
        ```python
        huggingface_embeddings = HuggingFaceEmbeddings(model_name="<new_model_name>")
        ```

2. **Modify Prompt**:
    - Adjust the prompt template in `get_conversational_chain()` to fit your use case.

3. **Add New Endpoints**:
    - Use FastAPI’s routing capabilities to add more endpoints as needed.

---

## Troubleshooting

1. **Model Loading Errors**:
    - Ensure all required models are correctly placed in the `models` directory.

2. **Environment Variables Not Found**:
    - Check that `.env` is correctly configured and loaded.

3. **API Not Starting**:
    - Ensure all dependencies are installed and use Python 3.9+.

---

## Contact

For issues, please contact Team IETE.



## Acknowledgements
This project is developed by [IETE Amrita SF](https://github.com/IETEAmritaChapter) under the initiative of IETE Amrita SF 2023-24 team, Amrita Vishwa Vidyapeetham, Coimbatore. 

© 2024 IETE Amrita. All rights reserved.

