# 🎓 YUKTI — Strategy for Success

> **TNPSC Exam Training App** | Tamil Nadu Public Service Commission Preparation

![Yukti Logo](public/yukti-logo.png)

## 📱 About

**Yukti** is a Duolingo-style TNPSC exam preparation app built with React. It helps aspirants prepare for Group 1, 2, 2A, 4, and VAO exams with daily practice, mock tests, progress tracking, and an AI assistant.

---

## ✨ Features

| Feature | Description |
|---|---|
| 📚 **Daily Practice** | Subject-wise quizzes with Tamil + English bilingual questions |
| 📝 **Mock Test** | 15-question randomized full-syllabus test |
| 🤖 **Yukti AI** | Claude-powered TNPSC expert assistant (Tanglish support) |
| 📊 **Progress Tracking** | Weak topic identification & subject-wise score tracking |
| 🔥 **Streak & XP** | Duolingo-style gamification to keep you motivated |
| 🏅 **Badges** | Achievement system for milestones |

---

## 📚 Subjects Covered

- 🏛️ History / வரலாறு
- ⚖️ Polity / அரசியல்
- 🌏 Geography / புவியியல்
- 🔬 Science / அறிவியல்
- 📊 Economy / பொருளாதாரம்
- 📜 Tamil / தமிழ்
- 📰 Current Affairs / நடப்பு நிகழ்வுகள்

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/yukti-tnpsc-app.git
cd yukti-tnpsc-app

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🗂️ Project Structure

```
yukti-app/
├── public/
│   └── yukti-logo.png          # App logo
├── src/
│   ├── components/
│   │   ├── SplashScreen.jsx    # Animated splash screen
│   │   ├── HomeScreen.jsx      # Dashboard / home
│   │   ├── QuizScreen.jsx      # Subject quiz
│   │   └── Screens.jsx         # Learn, Mock, AI, Profile screens
│   ├── data/
│   │   └── questions.js        # Question bank (bilingual)
│   ├── App.jsx                 # Main app & navigation
│   └── main.jsx                # React entry point
├── index.html
├── vite.config.js
└── package.json
```

---

## 🤖 AI Assistant Setup

The Yukti AI uses the Anthropic Claude API. The API call is made from the browser using the `claude-sonnet-4-20250514` model. No backend required.

> **Note:** For production deployment, proxy API calls through a backend to protect your API key.

---

## 🎨 Design

- **Theme:** Deep ocean blue / teal neon — matching the Yukti brand identity
- **Font:** Exo 2 (bold, technical feel)
- **Accent:** Cyan `#00d4ff` / `#00eaff` neon glow
- **Dark background:** `#020d14` deep navy

---

## 📋 TNPSC Exam Groups Covered

- **Group 1** — Combined Civil Services
- **Group 2 / 2A** — Combined Civil Services (Interview / Non-Interview)
- **Group 4** — Combined Civil Services Examination
- **VAO** — Village Administrative Officer

---

## 🛣️ Roadmap

- [ ] More questions per subject (50+)
- [ ] Previous year question papers
- [ ] Offline mode (PWA)
- [ ] User authentication & cloud sync
- [ ] Leaderboard
- [ ] Push notifications for daily reminders
- [ ] Tamil Nadu specific GK section

---

## 📄 License

MIT License © 2024 Yukti

---

*யுக்தி — உங்கள் வெற்றிக்கான திட்டம்* 🎓
