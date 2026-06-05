import { SUBJECTS } from "../data/questions.js";

const progressColor = (p) => p >= 70 ? "#00e676" : p >= 50 ? "#ffc107" : "#ff5252";

export default function HomeScreen({ progress, streak, xp, onNav, onStartMock }) {
  const avg = Math.round(Object.values(progress).reduce((a,b)=>a+b,0)/Object.values(progress).length);
  const weak = Object.entries(progress).filter(([,v])=>v<50).map(([k])=>SUBJECTS.find(s=>s.id===k));

  return (
    <div style={{ padding: "20px 16px", paddingBottom: 100 }}>
      {/* Hero banner */}
      <div style={{
        background: "linear-gradient(135deg, #0a3d5c 0%, #062a42 100%)",
        borderRadius: 20, padding: "22px 20px", marginBottom: 18,
        border: "1px solid #1a6b9a44",
        position: "relative", overflow: "hidden"
      }}>
        <div style={{ position: "absolute", right: -20, top: -20, width: 120, height: 120, borderRadius: "50%", background: "#00d4ff0a", border: "1px solid #00d4ff22" }}/>
        <div style={{ fontSize: 13, color: "#7ecfea", marginBottom: 4, letterSpacing: 1 }}>வணக்கம் / WELCOME 👋</div>
        <div style={{ fontSize: 19, fontWeight: 800, color: "#fff", marginBottom: 14, fontFamily: "'Exo 2',sans-serif" }}>
          உங்கள் வெற்றிப் பயணம் தொடரட்டும்!
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ flex: 1, background: "#031e30", borderRadius: 8, height: 10, overflow: "hidden" }}>
            <div style={{ width: `${avg}%`, height: "100%", background: "linear-gradient(90deg, #00b4d8, #00eaff)", borderRadius: 8, boxShadow: "0 0 8px #00d4ff88", transition: "width 0.8s ease" }}/>
          </div>
          <span style={{ color: "#00eaff", fontWeight: 800, fontSize: 16 }}>{avg}%</span>
        </div>
        <div style={{ fontSize: 11, color: "#5ba8c4", marginTop: 5 }}>Overall Progress / மொத்த முன்னேற்றம்</div>
      </div>

      {/* Stats row */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 18 }}>
        {[
          { label: "Streak", value: `🔥 ${streak}`, sub: "நாட்கள்", color: "#ff7043" },
          { label: "XP", value: `⚡ ${xp}`, sub: "Points", color: "#ffd600" },
          { label: "Score", value: `📊 ${avg}%`, sub: "Average", color: "#00eaff" },
        ].map(s => (
          <div key={s.label} style={{ background: "#0a2a3e", borderRadius: 14, padding: "12px 10px", textAlign: "center", border: "1px solid #1a4d6a33" }}>
            <div style={{ fontSize: 18, fontWeight: 800, color: s.color }}>{s.value}</div>
            <div style={{ fontSize: 10, color: "#5ba8c4", marginTop: 2 }}>{s.sub}</div>
          </div>
        ))}
      </div>

      {/* Weak topics */}
      {weak.length > 0 && (
        <div style={{ background: "#1a0a0a", border: "1px solid #ff525233", borderRadius: 16, padding: "14px 16px", marginBottom: 18 }}>
          <div style={{ color: "#ff8a80", fontWeight: 700, marginBottom: 10, fontSize: 13 }}>⚠️ பலவீன தலைப்புகள் — Weak Topics</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {weak.map(t => (
              <button key={t.id} onClick={() => onNav("quiz", t.id)} style={{
                background: "#2d0a0a", border: "1px solid #ff525255", borderRadius: 20,
                padding: "5px 14px", color: "#ff8a80", fontSize: 12, cursor: "pointer"
              }}>{t.icon} {t.name}</button>
            ))}
          </div>
        </div>
      )}

      {/* Action grid */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 18 }}>
        {[
          { label: "Daily Practice", tamil: "தினசரி பயிற்சி", icon: "📚", color: "#00b4d8", bg: "#031e30", border: "#00b4d833", nav: "learn" },
          { label: "Mock Test", tamil: "போட்டி தேர்வு", icon: "📝", color: "#00e676", bg: "#001a0f", border: "#00e67633", nav: "mock" },
          { label: "Yukti AI", tamil: "AI உதவியாளர்", icon: "🤖", color: "#7ecfea", bg: "#061624", border: "#7ecfea33", nav: "ai" },
          { label: "My Progress", tamil: "முன்னேற்றம்", icon: "🏆", color: "#ffd600", bg: "#1a1400", border: "#ffd60033", nav: "profile" },
        ].map(card => (
          <button key={card.label} onClick={() => card.nav === "mock" ? onStartMock() : onNav(card.nav)} style={{
            background: card.bg, border: `1px solid ${card.border}`, borderRadius: 18,
            padding: "18px 16px", cursor: "pointer", textAlign: "left"
          }}>
            <div style={{ fontSize: 30 }}>{card.icon}</div>
            <div style={{ fontWeight: 800, color: card.color, marginTop: 8, fontSize: 14, fontFamily: "'Exo 2',sans-serif" }}>{card.label}</div>
            <div style={{ fontSize: 11, color: "#5ba8c4", marginTop: 2 }}>{card.tamil}</div>
          </button>
        ))}
      </div>

      {/* Subject overview */}
      <div style={{ background: "#0a2a3e", borderRadius: 18, padding: "16px", border: "1px solid #1a4d6a33" }}>
        <div style={{ fontWeight: 700, color: "#00eaff", marginBottom: 14, fontSize: 14 }}>📈 Subject Progress</div>
        {SUBJECTS.map(s => (
          <div key={s.id} style={{ marginBottom: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
              <span style={{ fontSize: 13, color: "#cce8f4" }}>{s.icon} {s.name} / {s.tamil}</span>
              <span style={{ fontSize: 13, color: progressColor(progress[s.id]), fontWeight: 700 }}>{progress[s.id]}%</span>
            </div>
            <div style={{ background: "#031e30", borderRadius: 6, height: 7, overflow: "hidden" }}>
              <div style={{ width: `${progress[s.id]}%`, height: "100%", background: progressColor(progress[s.id]), borderRadius: 6, boxShadow: `0 0 6px ${progressColor(progress[s.id])}88`, transition: "width 0.6s ease" }}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
