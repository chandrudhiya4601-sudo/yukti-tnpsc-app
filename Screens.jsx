import { SUBJECTS, QUESTION_BANK } from "../data/questions.js";

const progressColor = (p) => p >= 70 ? "#00e676" : p >= 50 ? "#ffc107" : "#ff5252";

// ─── LEARN SCREEN ───────────────────────────────────────────────
export function LearnScreen({ progress, onSelect }) {
  return (
    <div style={{ padding: "20px 16px", paddingBottom: 100 }}>
      <div style={{ fontWeight: 900, fontSize: 22, marginBottom: 6, color: "#fff", fontFamily: "'Exo 2',sans-serif" }}>📚 Daily Practice</div>
      <div style={{ color: "#5ba8c4", marginBottom: 20, fontSize: 13 }}>பாடம் தேர்வு செய்யுங்கள் / Choose a subject</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {SUBJECTS.map(s => (
          <button key={s.id} onClick={() => onSelect(s.id)} style={{
            background: "#0a2a3e", border: `1px solid ${progressColor(progress[s.id])}33`,
            borderRadius: 18, padding: "16px 18px", cursor: "pointer",
            display: "flex", alignItems: "center", gap: 14, textAlign: "left"
          }}>
            <span style={{ fontSize: 34 }}>{s.icon}</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, color: "#e0f4ff", fontSize: 15 }}>{s.name} / {s.tamil}</div>
              <div style={{ marginTop: 8, background: "#031e30", borderRadius: 6, height: 6, overflow: "hidden" }}>
                <div style={{ width: `${progress[s.id]}%`, height: "100%", background: progressColor(progress[s.id]), borderRadius: 6, boxShadow: `0 0 5px ${progressColor(progress[s.id])}88` }}/>
              </div>
            </div>
            <span style={{ color: progressColor(progress[s.id]), fontWeight: 800, fontSize: 15, minWidth: 36, textAlign: "right" }}>{progress[s.id]}%</span>
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── MOCK TEST SCREEN ────────────────────────────────────────────
export function MockTestScreen({ onDone, onXp }) {
  const [questions] = [(() => {
    const all = [];
    Object.entries(QUESTION_BANK).forEach(([subj, qs]) => qs.forEach(q => all.push({ ...q, subj })));
    return all.sort(() => Math.random() - 0.5).slice(0, 15);
  })()];
  const [index, setIndex] = React.useState(0);
  const [answers, setAnswers] = React.useState({});
  const [done, setDone] = React.useState(false);
  const [score, setScore] = React.useState(0);

  const handleAnswer = (i) => {
    if (answers[index] !== undefined) return;
    setAnswers(a => ({ ...a, [index]: i }));
  };

  const next = () => {
    if (index + 1 >= questions.length) {
      let s = 0;
      questions.forEach((q, i) => { if (answers[i] === q.ans) s++; });
      setScore(s);
      setDone(true);
      onXp(s * 15);
    } else setIndex(i => i + 1);
  };

  const pct = Math.round((score / questions.length) * 100);

  if (done) return (
    <div style={{ padding: "30px 20px", textAlign: "center" }}>
      <div style={{ fontSize: 72 }}>{pct >= 80 ? "🥇" : pct >= 60 ? "🥈" : pct >= 40 ? "🥉" : "📈"}</div>
      <div style={{ fontSize: 24, fontWeight: 900, color: "#fff", fontFamily: "'Exo 2',sans-serif", marginTop: 16, marginBottom: 8 }}>Mock Test முடிந்தது!</div>
      <div style={{ background: "#0a2a3e", borderRadius: 20, padding: 28, margin: "20px 0", border: "1px solid #1a4d6a33" }}>
        <div style={{ fontSize: 58, fontWeight: 900, color: pct >= 60 ? "#00e676" : pct >= 40 ? "#ffc107" : "#ff5252" }}>{pct}%</div>
        <div style={{ color: "#7ecfea", marginBottom: 20 }}>{score} / {questions.length} Correct</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
          <div style={{ background: "#001a0f", borderRadius: 12, padding: 12 }}><div style={{ color: "#00e676", fontWeight: 800, fontSize: 20 }}>{score}</div><div style={{ fontSize: 10, color: "#5ba8c4" }}>Correct</div></div>
          <div style={{ background: "#1a0505", borderRadius: 12, padding: 12 }}><div style={{ color: "#ff5252", fontWeight: 800, fontSize: 20 }}>{questions.length - score}</div><div style={{ fontSize: 10, color: "#5ba8c4" }}>Wrong</div></div>
          <div style={{ background: "#1a1000", borderRadius: 12, padding: 12 }}><div style={{ color: "#ffd600", fontWeight: 800, fontSize: 20 }}>+{score * 15}</div><div style={{ fontSize: 10, color: "#5ba8c4" }}>XP</div></div>
        </div>
      </div>
      <div style={{ display: "flex", gap: 12 }}>
        <button onClick={() => { setAnswers({}); setIndex(0); setDone(false); setScore(0); }} style={{ flex: 1, background: "linear-gradient(90deg, #0077a8, #00b4d8)", border: "none", borderRadius: 14, padding: 16, color: "#fff", fontWeight: 800, cursor: "pointer" }}>Retry 🔄</button>
        <button onClick={onDone} style={{ flex: 1, background: "#0a2a3e", border: "1px solid #1a4d6a", borderRadius: 14, padding: 16, color: "#7ecfea", fontWeight: 700, cursor: "pointer" }}>Home</button>
      </div>
    </div>
  );

  const q = questions[index];
  const answered = answers[index] !== undefined;
  const subj = SUBJECTS.find(s => s.id === q.subj);

  return (
    <div style={{ padding: "20px 16px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
        <span style={{ color: "#00e676", fontWeight: 700, fontSize: 13 }}>📝 Mock Test</span>
        <span style={{ color: "#5ba8c4", fontSize: 13 }}>{index+1} / {questions.length}</span>
      </div>
      <div style={{ background: "#031e30", borderRadius: 6, height: 6, marginBottom: 24, overflow: "hidden" }}>
        <div style={{ width: `${((index+1)/questions.length)*100}%`, height: "100%", background: "linear-gradient(90deg, #00a550, #00e676)", borderRadius: 6, boxShadow: "0 0 8px #00e67666", transition: "width 0.4s" }}/>
      </div>
      <div style={{ background: "#0a2a3e", borderRadius: 20, padding: "20px", marginBottom: 20, border: "1px solid #1a4d6a44" }}>
        <div style={{ fontSize: 11, color: "#00e676", marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}>{subj?.icon} {subj?.name}</div>
        <div style={{ fontSize: 15, lineHeight: 1.7, fontWeight: 600, color: "#e0f4ff", whiteSpace: "pre-line" }}>{q.q}</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 11, marginBottom: 16 }}>
        {q.options.map((opt, i) => {
          let bg = "#0a2a3e", border = "#1a4d6a44", color = "#cce8f4";
          if (answered) {
            if (i === q.ans) { bg = "#001a0f"; border = "#00e676"; color = "#00e676"; }
            else if (i === answers[index]) { bg = "#1a0505"; border = "#ff5252"; color = "#ff8a80"; }
          }
          return (
            <button key={i} onClick={() => handleAnswer(i)} style={{ background: bg, border: `1.5px solid ${border}`, borderRadius: 14, padding: "13px 18px", color, textAlign: "left", cursor: answered ? "default" : "pointer", fontSize: 14, transition: "all 0.2s" }}>
              <span style={{ fontWeight: 800, marginRight: 8, color: "#00b4d8" }}>{["A","B","C","D"][i]}.</span>{opt}
            </button>
          );
        })}
      </div>
      {answered && (
        <button onClick={next} style={{ width: "100%", background: "linear-gradient(90deg, #00a550, #00e676)", border: "none", borderRadius: 14, padding: 16, color: "#fff", fontWeight: 800, fontSize: 16, cursor: "pointer" }}>
          {index + 1 >= questions.length ? "Submit ✓" : "Next →"}
        </button>
      )}
    </div>
  );
}

// ─── AI SCREEN ───────────────────────────────────────────────────
export function AiScreen({ progress, xp, streak }) {
  const [messages, setMessages] = React.useState([{ role: "bot", text: "வணக்கம்! நான் Yukti AI 🤖\nTNPSC பற்றி எதையும் கேளுங்கள்!\n\nHello! Ask me anything about TNPSC preparation, syllabus, strategy, or any topic!" }]);
  const [input, setInput] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const chatRef = React.useRef(null);

  React.useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages]);

  const send = async () => {
    if (!input.trim()) return;
    const text = input.trim();
    setInput("");
    setMessages(m => [...m, { role: "user", text }]);
    setLoading(true);
    try {
      const weakTopics = Object.entries(progress).filter(([,v])=>v<50).map(([k])=>k).join(", ");
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: `You are Yukti AI, an expert TNPSC exam coach for Tamil Nadu Public Service Commission. You help students with Group 1, 2, 2A, 4, VAO exam preparation.

Student profile: XP=${xp}, Streak=${streak} days, Weak topics: ${weakTopics || "none yet"}.

Respond in warm Tamil-English mix (Tanglish). Be specific to TNPSC syllabus. Give practical tips. Keep responses clear and concise. Use emojis occasionally. End with an encouraging line.`,
          messages: [
            ...messages.filter(m=>m.role==="user").slice(-4).map(m=>({ role:"user", content:m.text })),
            { role: "user", content: text }
          ],
        }),
      });
      const data = await res.json();
      const reply = data.content?.[0]?.text || "மன்னிக்கவும்! Try again please.";
      setMessages(m => [...m, { role: "bot", text: reply }]);
    } catch {
      setMessages(m => [...m, { role: "bot", text: "Connection error / இணைப்பு பிழை. Please try again!" }]);
    }
    setLoading(false);
  };

  const quickPrompts = ["Study plan for TNPSC", "Weak topic help", "History tips", "Tamil grammar help", "Mock exam strategy"];

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "calc(100vh - 130px)" }}>
      <div style={{ padding: "12px 16px", background: "#0a2a3e", borderBottom: "1px solid #1a4d6a33" }}>
        <div style={{ fontWeight: 900, fontSize: 17, color: "#00eaff", fontFamily: "'Exo 2',sans-serif" }}>🤖 Yukti AI Assistant</div>
        <div style={{ fontSize: 11, color: "#5ba8c4" }}>TNPSC Expert • எப்போதும் உதவ தயார்</div>
      </div>
      <div ref={chatRef} style={{ flex: 1, overflowY: "auto", padding: "16px", display: "flex", flexDirection: "column", gap: 12 }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ display: "flex", justifyContent: msg.role === "user" ? "flex-end" : "flex-start", alignItems: "flex-end", gap: 8 }}>
            {msg.role === "bot" && <span style={{ fontSize: 22, marginBottom: 4 }}>🤖</span>}
            <div style={{
              maxWidth: "80%",
              background: msg.role === "user" ? "linear-gradient(135deg, #0077a8, #00b4d8)" : "#0a2a3e",
              border: msg.role === "bot" ? "1px solid #1a4d6a44" : "none",
              borderRadius: msg.role === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
              padding: "12px 16px", fontSize: 14, lineHeight: 1.6, color: "#e0f4ff", whiteSpace: "pre-wrap"
            }}>{msg.text}</div>
          </div>
        ))}
        {loading && (
          <div style={{ display: "flex", alignItems: "flex-end", gap: 8 }}>
            <span style={{ fontSize: 22 }}>🤖</span>
            <div style={{ background: "#0a2a3e", borderRadius: "18px 18px 18px 4px", padding: "14px 18px", border: "1px solid #1a4d6a44" }}>
              <div style={{ display: "flex", gap: 5 }}>
                {[0,1,2].map(i => <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: "#00b4d8", animation: `bounce 1s ${i*0.2}s infinite` }}/>)}
              </div>
            </div>
          </div>
        )}
      </div>
      <div style={{ padding: "6px 12px", display: "flex", gap: 8, overflowX: "auto" }}>
        {quickPrompts.map(p => (
          <button key={p} onClick={() => setInput(p)} style={{ background: "#0a2a3e", border: "1px solid #0077a844", borderRadius: 20, padding: "5px 12px", color: "#00b4d8", fontSize: 11, whiteSpace: "nowrap", cursor: "pointer" }}>{p}</button>
        ))}
      </div>
      <div style={{ padding: "10px 16px 20px", display: "flex", gap: 10 }}>
        <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === "Enter" && send()}
          placeholder="கேள்வி கேளுங்கள் / Ask anything..."
          style={{ flex: 1, background: "#0a2a3e", border: "1px solid #0077a8", borderRadius: 25, padding: "12px 18px", color: "#e0f4ff", fontSize: 14, outline: "none" }}/>
        <button onClick={send} disabled={loading} style={{ background: "linear-gradient(135deg, #0077a8, #00b4d8)", border: "none", borderRadius: "50%", width: 46, height: 46, color: "#fff", fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 12px #00b4d844" }}>→</button>
      </div>
    </div>
  );
}

// ─── PROFILE SCREEN ──────────────────────────────────────────────
export function ProfileScreen({ progress, streak, xp }) {
  const avg = Math.round(Object.values(progress).reduce((a,b)=>a+b,0)/Object.values(progress).length);
  const level = Math.floor(xp / 100) + 1;
  const badges = [
    { icon: "🔥", name: "Week Warrior", earned: streak >= 7 },
    { icon: "⚡", name: "Quick Learner", earned: xp >= 100 },
    { icon: "🎯", name: "Sharp Shooter", earned: avg >= 70 },
    { icon: "⭐", name: "5-Day Streak", earned: streak >= 5 },
    { icon: "💎", name: "300 XP Club", earned: xp >= 300 },
    { icon: "🏆", name: "TNPSC Ready", earned: avg >= 80 },
  ];

  return (
    <div style={{ padding: "20px 16px", paddingBottom: 100 }}>
      {/* Profile hero */}
      <div style={{ textAlign: "center", marginBottom: 24 }}>
        <div style={{ width: 80, height: 80, background: "linear-gradient(135deg, #0077a8, #00eaff)", borderRadius: "50%", margin: "0 auto 12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, boxShadow: "0 0 20px #00d4ff44" }}>🎓</div>
        <div style={{ fontWeight: 900, fontSize: 20, color: "#fff", fontFamily: "'Exo 2',sans-serif" }}>TNPSC Aspirant</div>
        <div style={{ color: "#5ba8c4", fontSize: 13, marginTop: 4 }}>Level {level} • {xp} XP Total</div>
        <div style={{ marginTop: 10, background: "#031e30", borderRadius: 8, height: 8, overflow: "hidden", width: "60%", margin: "10px auto 0" }}>
          <div style={{ width: `${(xp % 100)}%`, height: "100%", background: "linear-gradient(90deg, #0077a8, #00eaff)", borderRadius: 8 }}/>
        </div>
        <div style={{ fontSize: 11, color: "#5ba8c4", marginTop: 4 }}>{xp % 100}/100 XP to Level {level+1}</div>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 20 }}>
        {[["🔥", streak, "Day Streak", "#ff7043"], ["⚡", xp, "Total XP", "#ffd600"], ["📊", `${avg}%`, "Avg Score", "#00eaff"]].map(([icon, val, label, color]) => (
          <div key={label} style={{ background: "#0a2a3e", borderRadius: 16, padding: 16, textAlign: "center", border: "1px solid #1a4d6a33" }}>
            <div style={{ fontSize: 26, fontWeight: 900, color }}>{icon} {val}</div>
            <div style={{ fontSize: 10, color: "#5ba8c4", marginTop: 3 }}>{label}</div>
          </div>
        ))}
      </div>

      {/* Subject scores */}
      <div style={{ background: "#0a2a3e", borderRadius: 18, padding: 16, marginBottom: 18, border: "1px solid #1a4d6a33" }}>
        <div style={{ fontWeight: 700, color: "#00eaff", marginBottom: 16 }}>📈 Subject Scores</div>
        {SUBJECTS.map(s => (
          <div key={s.id} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
            <span style={{ fontSize: 22 }}>{s.icon}</span>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                <span style={{ fontSize: 12, color: "#cce8f4" }}>{s.name} / {s.tamil}</span>
                <span style={{ fontSize: 12, color: progressColor(progress[s.id]), fontWeight: 800 }}>{progress[s.id]}%</span>
              </div>
              <div style={{ background: "#031e30", borderRadius: 6, height: 7, overflow: "hidden" }}>
                <div style={{ width: `${progress[s.id]}%`, height: "100%", background: progressColor(progress[s.id]), borderRadius: 6, boxShadow: `0 0 5px ${progressColor(progress[s.id])}88` }}/>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Badges */}
      <div style={{ background: "#0a2a3e", borderRadius: 18, padding: 16, border: "1px solid #1a4d6a33" }}>
        <div style={{ fontWeight: 700, color: "#00eaff", marginBottom: 14 }}>🏅 Badges / சாதனைகள்</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {badges.map(b => (
            <div key={b.name} style={{ background: b.earned ? "#031e30" : "#060f18", border: `1px solid ${b.earned ? "#00b4d844" : "#1a4d6a22"}`, borderRadius: 14, padding: "12px 14px", display: "flex", alignItems: "center", gap: 10, opacity: b.earned ? 1 : 0.4 }}>
              <span style={{ fontSize: 24 }}>{b.icon}</span>
              <span style={{ fontSize: 12, color: b.earned ? "#7ecfea" : "#3a6a8a", fontWeight: 600 }}>{b.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// need React import for MockTestScreen & AiScreen
import React from "react";
