# 🎓 CampusAI – Student Support Chatbot

An AI-powered student support assistant built with Node.js and Groq API. Helps students with academics, exams, fees, scholarships, hostel, attendance and more.

---

## ✨ Features

- 💬 **AI Chat** — Ask anything about your campus
- 🧠 **Quiz Mode** — Generate MCQ quizzes on any topic with instant feedback
- 📅 **Study Planner** — Get a day-by-day study plan for any subject
- 📄 **PDF Upload** — Upload a document and ask questions about it
- 🖼️ **Image Upload** — Attach images along with your message
- 🎤 **Voice Input** — Speak your question using the mic (Chrome supported)
- 🌐 **Multilingual** — Supports English, Hindi, Tamil, Telugu, Bengali
- 📋 **Message Actions** — Copy, Like, Dislike, Share any bot response
- 🔐 **Login & Register** — College and School student profiles

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or above
- A free [Groq API key](https://console.groq.com/keys)

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/campus-ai-chatbot.git
cd campus-ai-chatbot

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
```

Open `.env` and add your Groq API key:

```
GROQ_API_KEY=your_groq_api_key_here
PORT=3000
```

### Run

```bash
npm start
```

Open your browser at `http://localhost:3000`

---

## 🗂️ Project Structure

```
campus-ai-chatbot/
├── public/
│   └── index.html       # Frontend (Login, Register, Chat UI)
├── server.js            # Express backend + Groq API integration
├── package.json
├── .env.example         # Environment variable template
└── .gitignore
```

---

## 🔧 Tech Stack

| Layer    | Technology              |
|----------|-------------------------|
| Frontend | HTML, CSS, JavaScript   |
| Backend  | Node.js, Express        |
| AI Model | Groq API (GPT-OSS 20B)  |
| Voice    | Web Speech API          |

---

## ⚠️ Important

- Never commit your `.env` file — it contains your API key
- Voice input works best in Google Chrome
- PDF text extraction works for text-based PDFs only

---

## 📸 Screenshots

<img width="1600" height="859" alt="WhatsApp Image 2026-08-18 at 9 59 02 AM" src="https://github.com/user-attachments/assets/bb13654d-c763-4580-9ec1-48613b808a89" />
<img width="1600" height="860" alt="WhatsApp Image 2026-08-18 at 9 59 02 AM (1)" src="https://github.com/user-attachments/assets/fabf7d3e-56af-4b9b-9a27-37ac38c8832d" />
<img width="1600" height="817" alt="WhatsApp Image 2026-08-18 at 9 59 02 AM (2)" src="https://github.com/user-attachments/assets/2093d914-e7e1-4b22-9826-b2a34926be18" />
<img width="1600" height="806" alt="WhatsApp Image 2026-08-18 at 9 59 01 AM" src="https://github.com/user-attachments/assets/88089a9c-5fde-4756-abbf-c7de86112aaa" />





---

## 📄 License

MIT License — free to use and modify.
