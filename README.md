# AmritaGPT
AmritaGPT is a chatbot designed to answer all Amrita Viswa Vidyapeetham related questions, covering topics such as clubs, placements, entrance exams, and more. The system facilitates text-to-text conversation as well as speech-to-text and text-to-speech functionalities. 🤖📚🎙️


## Prototype
![figma prototype](https://github.com/SaranDharshanSP/AmritaGPT/assets/111682039/a498a66c-e54b-45ff-931a-be95b7a331bd)

## Implementation
- AmritaGPT collects data from various sources including the Amrita website, Quora, and other relevant platforms. This data is utilized by a RAG-based Large Language Model (LLM) to generate responses. The project relies on LLAMA 2 model, FAISS, and Langchain for its functionality. The API gateway is powered by FastAPI, with temporary use of ngrok. 🌐🛠️

- For speech-to-text conversion, Whisper is employed, which sends the input to the LLM. gTTS is then used to convert the generated text into speech. 🔊🗣️

- The front-end is developed using React.js, while Flask is used for backend operations. The web UI and system integration are currently under development and will be completed shortly. 💻⚙️
