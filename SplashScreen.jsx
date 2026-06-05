import { useEffect, useState } from "react";

export default function SplashScreen({ onDone }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(timer); setTimeout(onDone, 300); return 100; }
        return p + 4;
      });
    }, 60);
    return () => clearInterval(timer);
  }, [onDone]);

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 9999,
      background: "radial-gradient(ellipse at 30% 40%, #0a3d5c 0%, #062a42 40%, #041c2e 100%)",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      fontFamily: "'Exo 2', sans-serif",
    }}>
      {/* Polygon network background */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.15 }} viewBox="0 0 400 800">
        <line x1="50" y1="100" x2="200" y2="180" stroke="#00d4ff" strokeWidth="0.5"/>
        <line x1="200" y1="180" x2="350" y2="80" stroke="#00d4ff" strokeWidth="0.5"/>
        <line x1="350" y1="80" x2="380" y2="250" stroke="#00d4ff" strokeWidth="0.5"/>
        <line x1="200" y1="180" x2="380" y2="250" stroke="#00d4ff" strokeWidth="0.5"/>
        <line x1="50" y1="100" x2="20" y2="300" stroke="#00d4ff" strokeWidth="0.5"/>
        <line x1="20" y1="300" x2="200" y2="380" stroke="#00d4ff" strokeWidth="0.5"/>
        <line x1="200" y1="380" x2="380" y2="250" stroke="#00d4ff" strokeWidth="0.5"/>
        <line x1="20" y1="500" x2="150" y2="600" stroke="#00d4ff" strokeWidth="0.5"/>
        <line x1="150" y1="600" x2="300" y2="520" stroke="#00d4ff" strokeWidth="0.5"/>
        <line x1="300" y1="520" x2="380" y2="650" stroke="#00d4ff" strokeWidth="0.5"/>
        <circle cx="50" cy="100" r="3" fill="#00d4ff"/>
        <circle cx="200" cy="180" r="3" fill="#00d4ff"/>
        <circle cx="350" cy="80" r="3" fill="#00d4ff"/>
        <circle cx="380" cy="250" r="3" fill="#00d4ff"/>
        <circle cx="20" cy="300" r="3" fill="#00d4ff"/>
        <circle cx="200" cy="380" r="3" fill="#00d4ff"/>
        <circle cx="150" cy="600" r="3" fill="#00d4ff"/>
        <circle cx="300" cy="520" r="3" fill="#00d4ff"/>
      </svg>

      {/* Logo Icon — book + arrow */}
      <div style={{ position: "relative", marginBottom: 24, animation: "fadeIn 0.8s ease" }}>
        <svg width="120" height="100" viewBox="0 0 120 100" fill="none">
          {/* Glow filter */}
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>
          {/* Book pages */}
          <path d="M60 75 L15 55 L15 20 Q37 28 60 22 Q83 28 105 20 L105 55 Z" stroke="#00d4ff" strokeWidth="2.5" fill="none" filter="url(#glow)"/>
          {/* Book spine */}
          <line x1="60" y1="22" x2="60" y2="75" stroke="#00d4ff" strokeWidth="2.5" filter="url(#glow)"/>
          {/* Arrow up */}
          <path d="M60 10 L60 50" stroke="#00eaff" strokeWidth="3" strokeLinecap="round" filter="url(#glow)"/>
          <path d="M48 22 L60 8 L72 22" stroke="#00eaff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" filter="url(#glow)"/>
          {/* Underline hook */}
          <path d="M42 68 Q60 80 78 68" stroke="#00d4ff" strokeWidth="2" fill="none" strokeLinecap="round" filter="url(#glow)"/>
        </svg>
      </div>

      {/* App name */}
      <div style={{ animation: "fadeIn 1s ease 0.2s both" }}>
        <div style={{
          fontSize: 42, fontWeight: 900, letterSpacing: 8,
          color: "#fff",
          textShadow: "0 0 20px #00d4ff88, 0 0 40px #00d4ff44",
          fontFamily: "'Exo 2', sans-serif",
        }}>YUKTI</div>
        <div style={{ textAlign: "center", color: "#7ecfea", fontSize: 13, letterSpacing: 3, marginTop: 4 }}>
          Strategy for Success
        </div>
      </div>

      {/* Loading ring */}
      <div style={{ marginTop: 60, animation: "fadeIn 1s ease 0.5s both" }}>
        <div style={{ position: "relative", width: 50, height: 50 }}>
          <svg viewBox="0 0 50 50" width="50" height="50" style={{ transform: "rotate(-90deg)" }}>
            <circle cx="25" cy="25" r="20" fill="none" stroke="#0a3d5c" strokeWidth="3"/>
            <circle cx="25" cy="25" r="20" fill="none" stroke="#00d4ff" strokeWidth="3"
              strokeDasharray={`${2 * Math.PI * 20}`}
              strokeDashoffset={`${2 * Math.PI * 20 * (1 - progress / 100)}`}
              strokeLinecap="round"
              style={{ transition: "stroke-dashoffset 0.1s linear", filter: "drop-shadow(0 0 6px #00d4ff)" }}
            />
          </svg>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@400;700;900&display=swap');
        @keyframes fadeIn { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }
      `}</style>
    </div>
  );
}
