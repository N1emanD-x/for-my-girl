import { useState, useMemo, useRef, useEffect } from "react";

// ─── CUSTOMIZE DI SINI ──────────────────────────────────────────────────────
const PHOTOS = [
  { src: "/photos/Firstmeet.jpg", caption: "where it all began" },
  { src: "/photos/Firstdate.jpg", caption: "our first date" },
  { src: "/photos/Us.jpg", caption: "just us" },
  { src: "/photos/Aqua.jpg", caption: "a little moment" },
  { src: "/photos/mygf.jpg", caption: "my favorite person" },
  { src: "/photos/Firsthike.jpg", caption: "Forever" },
];
const YT = "Ip6cw8gfHHI";
const YT_START = 48; // ganti sesuai detik reff mulai
// ────────────────────────────────────────────────────────────────────────────

const MSG = `I'm sorry, I'm really sorry for everything that happened. I regret it so much, every moment I let you down.

I'm sorry, I'm really sorry for everything that happened. I regret it so much, every moment I let you down.

I've just been trying to go through, day by day, without you, apart from you and it's so heavy, nothing feels complete without you. All I want is to be sitting next to you again, talking about anything with each other. Please, byy...

cause I miss you so much, and I love you — I love you more more more than anything. ♡`;

const GBG = [
  "repeating-linear-gradient(0deg,transparent,transparent 24px,rgba(255,150,190,.1) 24px,rgba(255,150,190,.1) 25px)",
  "repeating-linear-gradient(90deg,transparent,transparent 24px,rgba(255,150,190,.1) 24px,rgba(255,150,190,.1) 25px)"
].join(",");

const ROTS = [-1.5, 1.2, -0.8, 1.8, -1.2, 0.5];
const DS = { fontFamily: "'Poppins', cursive" };

function Btn({ onClick, label = "Continue →", disabled = false }) {
  return (
    <button onClick={onClick} disabled={disabled} style={{
      marginTop: 28, padding: "12px 32px", borderRadius: 999,
      background: "white", border: "1.5px solid #e898b8",
      color: "#c05070", ...DS, fontSize: 20, cursor: disabled ? "default" : "pointer",
      opacity: disabled ? .5 : 1,
      boxShadow: "0 2px 14px rgba(200,80,120,.12)"
    }}>{label}</button>
  );
}

function Cover({ go }) {
  return (
    <div style={{ minHeight: "100vh", background: "#fff2f7", backgroundImage: GBG, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 48, textAlign: "center", boxSizing: "border-box" }}>
      <div onClick={go} title="Tap to open" style={{ width: 200, height: 148, margin: "0 auto 32px", cursor: "pointer", position: "relative", userSelect: "none" }}>
        <div style={{ position: "absolute", inset: 0, background: "#f9c8d8", borderRadius: 10, boxShadow: "0 6px 28px rgba(200,80,130,.22)" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 88, background: "#efaac4", clipPath: "polygon(0 0,50% 58%,100% 0)", borderRadius: "10px 10px 0 0" }} />
        <div style={{ position: "absolute", top: 26, left: "50%", transform: "translateX(-50%)", width: 36, height: 36, background: "#d4537e", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 18, zIndex: 3, boxShadow: "0 2px 10px rgba(190,60,100,.35)" }}>♥</div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 76, background: "#fde8f2", borderRadius: "0 0 10px 10px" }} />
      </div>
      <p style={{ ...DS, color: "#b04060", fontSize: 15, opacity: .75, margin: "0 0 4px" }}>just for you</p>
      <h1 style={{ ...DS, color: "#b04060", fontSize: "clamp(28px, 9vw, 40px)", margin: "0 0 4px", fontWeight: 700 }}>Cupaaa</h1>
      <Btn onClick={go} label="Open ♡" />
    </div>
  );
}

function PlayMusic({ onPlay, ready }) {
  return (
    <div style={{ minHeight: "100vh", background: "#fff5f9", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "48px 20px", boxSizing: "border-box", textAlign: "center" }}>
      <div style={{ background: "#ffe4ef", borderRadius: 28, padding: "40px 32px", maxWidth: 340, width: "100%", boxShadow: "0 4px 30px rgba(200,80,120,.14)" }}>
        <span style={{ fontSize: 34 }}>🎵</span>
        <p style={{ ...DS, fontSize: 20, color: "#b04060", margin: "14px 0 6px" }}>a little reminder of us</p>
        <p style={{ ...DS, fontSize: 14, color: "#c06080", opacity: .75, marginBottom: 20 }}>Here With Me — d4vd ♡</p>
        <Btn onClick={onPlay} label={ready ? "▶ Play our song" : "loading..."} disabled={!ready} />
      </div>
    </div>
  );
}

function Letter({ go }) {
  return (
    <div style={{ minHeight: "100vh", background: "#fffafc", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "48px 20px", boxSizing: "border-box" }}>
      <div style={{ maxWidth: 460, width: "100%", background: "white", borderRadius: 20, padding: "40px 36px", boxShadow: "0 4px 36px rgba(200,80,130,.08)", border: "0.5px solid rgba(240,170,200,.5)" }}>
        <p style={{ ...DS, fontSize: 12, color: "#d4537e", textAlign: "center", marginBottom: 24, letterSpacing: 1.5, textTransform: "uppercase", opacity: .8 }}>
          Hii Cupaaa
        </p>
        <div style={{ ...DS, fontSize: 19, color: "#444", lineHeight: 2, whiteSpace: "pre-line" }}>
          {MSG}
        </div>
        <div style={{ textAlign: "center" }}>
          <Btn onClick={go} />
        </div>
      </div>
    </div>
  );
}

function Photos({ go }) {
  return (
    <div style={{ minHeight: "100vh", background: "#fff0f6", backgroundImage: GBG, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "48px 20px", boxSizing: "border-box" }}>
      <h2 style={{ ...DS, fontSize: "clamp(30px, 9vw, 44px)", color: "#c04068", marginBottom: 28 }}> All About You</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, maxWidth: 400, width: "100%" }}>
        {PHOTOS.map((ph, i) => (
          <div key={i} style={{ background: "white", padding: "8px 8px 28px", borderRadius: 4, boxShadow: "0 3px 16px rgba(180,70,110,.14)", transform: `rotate(${ROTS[i]}deg)` }}>
            <div style={{ width: "100%", paddingBottom: "100%", background: "#ffd8ec", borderRadius: 2, position: "relative", overflow: "hidden" }}>
              {ph.src
                ? <img src={ph.src} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                : <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 4 }}>
                    <span style={{ fontSize: 26 }}>📷</span>
                    <span style={{ fontSize: 10, color: "#e090b0", fontFamily: "sans-serif" }}>add photo</span>
                  </div>
              }
            </div>
            <p style={{ ...DS, fontSize: 14, color: "#999", textAlign: "center", margin: "10px 0 0" }}>{ph.caption}</p>
          </div>
        ))}
      </div>
      <Btn onClick={go} />
    </div>
  );
}

function Final({ petals }) {
  return (
    <div style={{ minHeight: "100vh", background: "#fff0f6", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: 40, position: "relative", overflow: "hidden", boxSizing: "border-box" }}>
      {petals.map((pt, i) => (
        <div key={i} style={{ position: "absolute", left: pt.left, top: pt.top, fontSize: pt.size, color: "#e07090", opacity: .3, animation: `fall ${pt.dur}s linear ${pt.delay}s infinite`, pointerEvents: "none" }}>✿</div>
      ))}
      <p style={{ ...DS, fontSize: "clamp(32px, 10vw, 52px)", color: "#c03a5e", lineHeight: 1.4, fontWeight: 700, position: "relative", zIndex: 1, animation: "hb 3.5s ease-in-out infinite", margin: 0 }}>
        I Love You.<br />More Than<br />Anything.
      </p>
      <p style={{ ...DS, fontSize: 18, color: "#d4537e", marginTop: 32, opacity: .7, position: "relative", zIndex: 1 }}>
        — always, me ♡
      </p>
    </div>
  );
}

export default function App() {
  const [p, setP] = useState(0);
  const [started, setStarted] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);
  const ytPlayerRef = useRef(null);

  const go = () => {
    setTransitioning(true);
    setTimeout(() => {
      setP(x => x + 1);
      setTransitioning(false);
    }, 600);
  };
  const openAndPlay = () => { setStarted(true); go(); };

  // Siapkan YouTube IFrame API begitu "started" jadi true (pas klik Open di Cover),
  // supaya waktu dia sampai di halaman PlayMusic, player-nya sudah siap.
  useEffect(() => {
    if (!started) return;

    const createPlayer = () => {
      ytPlayerRef.current = new window.YT.Player("yt-player-slot", {
        videoId: YT,
        playerVars: { start: YT_START, rel: 0, playsinline: 1 },
        events: { onReady: () => setPlayerReady(true) },
      });
    };

    if (window.YT && window.YT.Player) {
      createPlayer();
    } else {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
      window.onYouTubeIframeAPIReady = createPlayer;
    }
  }, [started]);

  const handlePlay = () => {
    ytPlayerRef.current?.playVideo();
    go();
  };

  const petals = useMemo(() => Array.from({ length: 14 }, (_, i) => ({
    left: `${(i * 7.1 + 3) % 100}%`,
    top: `-${20 + i * 5}px`,
    size: 12 + (i * 3.7 % 16),
    delay: (i * .4) % 5,
    dur: 4.5 + (i * .5 % 3)
  })), []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        @keyframes fall {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: .6; }
          90% { opacity: .5; }
          100% { transform: translateY(120vh) rotate(360deg); opacity: 0; }
        }
        @keyframes hb {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        .page { animation: fadeIn 1.1s ease-out; }
        .page.fade-out { animation: fadeOut 0.6s ease-in forwards; }
        html, body, #root {
          margin: 0;
          padding: 0;
          width: 100%;
          min-height: 100%;
          background: #fff2f7;
          overflow-x: hidden;
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
      `}</style>

      {/* Tempat player YouTube nempel, SELALU tersembunyi (1px) — nggak pernah
          ditampilkan secara visual sama sekali, karena UI-nya sudah full custom
          lewat tombol "Play our song" di halaman PlayMusic. */}
      {started && (
        <div
          id="yt-player-slot"
          style={{ position: "fixed", top: 0, left: 0, width: 1, height: 1, opacity: 0, pointerEvents: "none", zIndex: -1 }}
        />
      )}

      <div className={`page ${transitioning ? "fade-out" : ""}`} key={p}>
        {p === 0 && <Cover go={openAndPlay} />}
        {p === 1 && <PlayMusic onPlay={handlePlay} ready={playerReady} />}
        {p === 2 && <Letter go={go} />}
        {p === 3 && <Photos go={go} />}
        {p === 4 && <Final petals={petals} />}
      </div>
    </>
  );
}