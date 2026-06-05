import { useState, useCallback } from "react";
import SplashScreen from "./components/SplashScreen.jsx";
import HomeScreen from "./components/HomeScreen.jsx";
import QuizScreen from "./components/QuizScreen.jsx";
import { LearnScreen, MockTestScreen, AiScreen, ProfileScreen } from "./components/Screens.jsx";
import { SUBJECTS } from "./data/questions.js";

const NAV_ITEMS = [
  { id: "home", icon: "🏠", label: "Home" },
  { id: "learn", icon: "📚", label: "Learn" },
  { id: "mock", icon: "📝", label: "Test" },
  { id: "ai", icon: "🤖", label: "AI" },
  { id: "profile", icon: "👤", label: "Profile" },
];

const initProgress = () => Object.fromEntries(SUBJECTS.map(s => [s.id, Math.floor(Math.random() * 40) + 20]));

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [screen, setScreen] = useState("home");
  const [quizSubject, setQuizSubject] = useState(null);
  const [streak] = useState(7);
  const [xp, setXp] = useState(340);
  const [progress, setProgress] = useState(initProgress);
  const [mockKey, setMockKey] = useState(0);

  const addXp = useCallback((n) => setXp(x => x + n), []);

  const startQuiz = (subjectId) => {
    setQuizSubject(subjectId);
    setScreen("quiz");
  };

  const finishQuiz = (pct) => {
    setProgress(p => ({ ...p, [quizSubject]: pct }));
    setScreen("learn");
    setQuizSubject(null);
  };

  const startMock = () => {
    setMockKey(k => k+1);
    setScreen("mock");
  };

  const navigate = (target, payload) => {
    if (target === "quiz") { startQuiz(payload); }
    else if (target === "mock") { startMock(); }
    else { setScreen(target); setQuizSubject(null); }
  };

  if (showSplash) return <SplashScreen onDone={() => setShowSplash(false)} />;

  return (
    <div style={{
      fontFamily: "'Exo 2', 'Segoe UI', sans-serif",
      background: "radial-gradient(ellipse at 20% 0%, #0a3d5c22 0%, #041824 60%, #020d14 100%)",
      minHeight: "100vh", color: "#e0f4ff",
      maxWidth: 480, margin: "0 auto",
      position: "relative",
    }}>
      {/* Header */}
      <div style={{
        background: "linear-gradient(180deg, #031e30 0%, #041824ee 100%)",
        padding: "14px 18px",
        borderBottom: "1px solid #1a4d6a33",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        position: "sticky", top: 0, zIndex: 100,
        backdropFilter: "blur(12px)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {screen !== "home" && (
            <button onClick={() => { setScreen("home"); setQuizSubject(null); }}
              style={{ background: "none", border: "none", color: "#00b4d8", fontSize: 20, cursor: "pointer", padding: "0 4px" }}>←</button>
          )}
          <div>
            <span style={{ fontSize: 22, fontWeight: 900, letterSpacing: 3, color: "#fff", textShadow: "0 0 15px #00d4ff66", fontFamily: "'Exo 2',sans-serif" }}>YUKTI</span>
            <span style={{ fontSize: 10, color: "#5ba8c4", marginLeft: 6, letterSpacing: 1 }}>Strategy for Success</span>
          </div>
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 4, background: "#031e30", padding: "4px 10px", borderRadius: 20, border: "1px solid #ff704322" }}>
            <span>🔥</span><span style={{ fontWeight: 800, color: "#ff7043", fontSize: 13 }}>{streak}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 4, background: "#031e30", padding: "4px 10px", borderRadius: 20, border: "1px solid #ffd60022" }}>
            <span>⚡</span><span style={{ fontWeight: 800, color: "#ffd600", fontSize: 13 }}>{xp}</span>
          </div>
        </div>
      </div>

      {/* Screens */}
      <div style={{ paddingBottom: screen === "ai" ? 0 : 80 }}>
        {screen === "home" && <HomeScreen progress={progress} streak={streak} xp={xp} onNav={navigate} onStartMock={startMock} />}
        {screen === "learn" && !quizSubject && <LearnScreen progress={progress} onSelect={startQuiz} />}
        {screen === "quiz" && quizSubject && <QuizScreen subjectId={quizSubject} onBack={() => setScreen("learn")} onDone={finishQuiz} onXp={addXp} />}
        {screen === "mock" && <MockTestScreen key={mockKey} onDone={() => setScreen("home")} onXp={addXp} />}
        {screen === "ai" && <AiScreen progress={progress} xp={xp} streak={streak} />}
        {screen === "profile" && <ProfileScreen progress={progress} streak={streak} xp={xp} />}
      </div>

      {/* Bottom Nav */}
      <div style={{
        position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)",
        width: "100%", maxWidth: 480,
        background: "linear-gradient(180deg, transparent 0%, #031e30 20%)",
        borderTop: "1px solid #1a4d6a33",
        display: "flex", justifyContent: "space-around",
        padding: "10px 0 20px",
        backdropFilter: "blur(16px)",
        zIndex: 99,
      }}>
        {NAV_ITEMS.map(n => {
          const active = screen === n.id || (n.id === "learn" && screen === "quiz");
          return (
            <button key={n.id} onClick={() => navigate(n.id === "mock" ? "mock" : n.id)}
              style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 3, padding: "0 12px" }}>
              <span style={{ fontSize: 22, filter: active ? "drop-shadow(0 0 6px #00eaff)" : "none" }}>{n.icon}</span>
              <span style={{ fontSize: 10, color: active ? "#00eaff" : "#2a5a7a", fontWeight: active ? 800 : 400, transition: "color 0.2s" }}>{n.label}</span>
              {active && <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#00eaff", boxShadow: "0 0 6px #00eaff" }}/>}
            </button>
          );
        })}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@400;600;700;900&display=swap');
        @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-thumb { background: #1a4d6a; border-radius: 3px; }
        * { box-sizing: border-box; }
        button { font-family: 'Exo 2', sans-serif; }
        input { font-family: 'Exo 2', sans-serif; }
      `}</style>
    </div>
  );
}
