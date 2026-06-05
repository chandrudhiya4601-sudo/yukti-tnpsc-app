import { useState } from "react";
import { QUESTION_BANK, SUBJECTS } from "../data/questions.js";

export default function QuizScreen({ subjectId, onBack, onDone, onXp }) {
  const questions = QUESTION_BANK[subjectId];
  const subject = SUBJECTS.find(s => s.id === subjectId);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const q = questions[current];

  const handleAnswer = (i) => {
    if (selected !== null) return;
    setSelected(i);
    if (i === q.ans) { setScore(s => s+1); onXp(10); }
  };

  const next = () => {
    if (current + 1 >= questions.length) { setDone(true); }
    else { setCurrent(c => c+1); setSelected(null); }
  };

  const pct = Math.round((score / questions.length) * 100);

  if (done) return (
    <div style={{ padding: "30px 20px", textAlign: "center" }}>
      <div style={{ fontSize: 72, marginBottom: 16 }}>{pct >= 80 ? "🏆" : pct >= 60 ? "⭐" : "💪"}</div>
      <div style={{ fontSize: 24, fontWeight: 900, color: "#fff", fontFamily: "'Exo 2',sans-serif", marginBottom: 8 }}>
        {pct >= 80 ? "சிறப்பு! Excellent!" : pct >= 60 ? "நல்லது! Good!" : "தொடர்க! Keep Going!"}
      </div>
      <div style={{ color: "#7ecfea", marginBottom: 28, fontSize: 14 }}>{score} / {questions.length} correct</div>
      <div style={{ background: "#0a2a3e", borderRadius: 20, padding: 24, marginBottom: 24, border: "1px solid #1a4d6a33" }}>
        <div style={{ fontSize: 54, fontWeight: 900, color: pct >= 60 ? "#00e676" : "#ff5252", marginBottom: 8 }}>{pct}%</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div style={{ background: "#001a0f", borderRadius: 12, padding: 12 }}>
            <div style={{ color: "#00e676", fontWeight: 800, fontSize: 22 }}>{score}</div>
            <div style={{ fontSize: 11, color: "#5ba8c4" }}>Correct / சரி</div>
          </div>
          <div style={{ background: "#1a0505", borderRadius: 12, padding: 12 }}>
            <div style={{ color: "#ff5252", fontWeight: 800, fontSize: 22 }}>+{score * 10} XP</div>
            <div style={{ fontSize: 11, color: "#5ba8c4" }}>Earned</div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <button onClick={() => { setCurrent(0); setSelected(null); setScore(0); setDone(false); }} style={{ background: "linear-gradient(90deg, #0077a8, #00b4d8)", border: "none", borderRadius: 14, padding: 16, color: "#fff", fontWeight: 800, fontSize: 15, cursor: "pointer" }}>மீண்டும் / Retry 🔄</button>
        <button onClick={() => onDone(pct)} style={{ background: "#0a2a3e", border: "1px solid #1a4d6a", borderRadius: 14, padding: 16, color: "#7ecfea", fontWeight: 700, fontSize: 15, cursor: "pointer" }}>← Back</button>
      </div>
    </div>
  );

  return (
    <div style={{ padding: "20px 16px" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
        <div style={{ color: "#00eaff", fontWeight: 700 }}>{subject?.icon} {subject?.name}</div>
        <div style={{ color: "#5ba8c4", fontSize: 13 }}>{current+1} / {questions.length}</div>
      </div>
      {/* Progress bar */}
      <div style={{ background: "#031e30", borderRadius: 6, height: 6, marginBottom: 24, overflow: "hidden" }}>
        <div style={{ width: `${((current+1)/questions.length)*100}%`, height: "100%", background: "linear-gradient(90deg, #0077a8, #00eaff)", borderRadius: 6, boxShadow: "0 0 8px #00d4ff66", transition: "width 0.4s" }}/>
      </div>
      {/* Question */}
      <div style={{ background: "#0a2a3e", borderRadius: 20, padding: "22px 20px", marginBottom: 20, border: "1px solid #1a4d6a44", minHeight: 110 }}>
        <div style={{ fontSize: 16, lineHeight: 1.7, fontWeight: 600, color: "#e0f4ff", whiteSpace: "pre-line" }}>{q.q}</div>
      </div>
      {/* Options */}
      <div style={{ display: "flex", flexDirection: "column", gap: 11, marginBottom: 20 }}>
        {q.options.map((opt, i) => {
          let bg = "#0a2a3e", border = "#1a4d6a44", color = "#cce8f4";
          if (selected !== null) {
            if (i === q.ans) { bg = "#001a0f"; border = "#00e676"; color = "#00e676"; }
            else if (i === selected) { bg = "#1a0505"; border = "#ff5252"; color = "#ff8a80"; }
          }
          return (
            <button key={i} onClick={() => handleAnswer(i)} style={{
              background: bg, border: `1.5px solid ${border}`, borderRadius: 14,
              padding: "14px 18px", color, textAlign: "left", cursor: selected !== null ? "default" : "pointer",
              fontSize: 14, fontWeight: 500, transition: "all 0.2s", lineHeight: 1.4
            }}>
              <span style={{ fontWeight: 800, marginRight: 8, color: selected !== null && i === q.ans ? "#00e676" : "#00b4d8" }}>{["A","B","C","D"][i]}.</span>{opt}
            </button>
          );
        })}
      </div>
      {/* Explanation */}
      {selected !== null && (
        <div style={{ background: "#031624", border: "1px solid #0077a844", borderRadius: 14, padding: "14px 16px", marginBottom: 16 }}>
          <div style={{ color: "#00b4d8", fontWeight: 700, marginBottom: 6, fontSize: 13 }}>💡 விளக்கம் / Explanation</div>
          <div style={{ color: "#7ecfea", fontSize: 13, lineHeight: 1.7, whiteSpace: "pre-line" }}>{q.exp}</div>
        </div>
      )}
      {selected !== null && (
        <button onClick={next} style={{ width: "100%", background: "linear-gradient(90deg, #0077a8, #00b4d8)", border: "none", borderRadius: 14, padding: 16, color: "#fff", fontWeight: 800, fontSize: 16, cursor: "pointer", boxShadow: "0 4px 20px #00b4d844" }}>
          {current + 1 >= questions.length ? "முடிக்க / Finish ✓" : "அடுத்து / Next →"}
        </button>
      )}
    </div>
  );
}
