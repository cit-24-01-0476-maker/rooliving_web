import React from "react";
import { useNavigate } from "react-router-dom";
import { Home } from "lucide-react";

export default function WelcomePage() {
  const navigate = useNavigate();

  const handleContinue = () => {
    sessionStorage.setItem("roo_welcome_seen", "1");
    navigate("/", { replace: true });
  };

  return (
    <div className="rl-wrap">
      {/* Animated background blobs (safe: no full-screen gradients) */}
      <div className="rl-bg">
        <div className="rl-blob rl-blob-a" />
        <div className="rl-blob rl-blob-b" />
        <div className="rl-blob rl-blob-c" />

        {/* subtle moving particles */}
        <div className="rl-particles" />
      </div>

      {/* Center Card */}
      <div className="rl-card rl-float">
        {/* Animated border glow */}
        <div className="rl-borderGlow" />

        {/* Icon */}
        <div className="rl-iconWrap">
          <div className="rl-iconRing" />
          <div className="rl-icon">
            <Home size={26} />
          </div>
        </div>

        {/* Text */}
        <h1 className="rl-title">
          Welcome to <span className="rl-brand">Roo Living</span>
        </h1>

        <p className="rl-subtitle">
          Your dream home — designed &amp; built with ease.
        </p>

        {/* Status */}
        <div className="rl-status">
          <span className="rl-dot" />
          <span>Ready to start</span>
        </div>

        {/* Buttons */}
        <button className="rl-btn" onClick={handleContinue}>
          Continue
        </button>

        <p className="rl-hint">Click Continue to enter the website</p>
      </div>

      <style>{`
        /* =========================
           Base layout (NO LINES)
        ========================== */
        .rl-wrap{
          min-height: 100vh;
          display:flex;
          align-items:center;
          justify-content:center;
          background: #0b0b0b; /* solid background => banding/lines gone */
          color: #fff;
          overflow:hidden;
          position:relative;
          padding: 32px 16px;
        }

        .rl-bg{
          position:absolute; inset:0;
          pointer-events:none;
        }

        /* =========================
           Blobs (no screen-wide gradients)
        ========================== */
        .rl-blob{
          position:absolute;
          width: 560px;
          height: 560px;
          border-radius: 999px;
          filter: blur(70px);
          opacity: .18;
          will-change: transform;
          animation: rlBlob 18s ease-in-out infinite;
        }

        .rl-blob-a{
          left:-260px; top:-260px;
          background: rgba(249,115,22,1);
        }
        .rl-blob-b{
          right:-280px; bottom:-300px;
          background: rgba(255,255,255,0.35);
          animation-delay: -7s;
        }
        .rl-blob-c{
          left: 55%;
          top: 10%;
          width: 420px;
          height: 420px;
          background: rgba(249,115,22,0.55);
          opacity: .10;
          animation-delay: -12s;
        }

        @keyframes rlBlob{
          0%,100%{ transform: translate(0,0) scale(1); }
          50%{ transform: translate(90px,-60px) scale(1.10); }
        }

        /* =========================
           Particles (next level, subtle)
        ========================== */
        .rl-particles{
          position:absolute; inset:0;
          opacity: .35;
          background-image:
            radial-gradient(circle at 12% 22%, rgba(255,255,255,0.18) 0 1px, transparent 2px),
            radial-gradient(circle at 30% 70%, rgba(249,115,22,0.22) 0 1px, transparent 2px),
            radial-gradient(circle at 78% 35%, rgba(255,255,255,0.16) 0 1px, transparent 2px),
            radial-gradient(circle at 62% 78%, rgba(249,115,22,0.18) 0 1px, transparent 2px),
            radial-gradient(circle at 90% 55%, rgba(255,255,255,0.14) 0 1px, transparent 2px);
          background-size: 100% 100%;
          animation: rlParticles 8s ease-in-out infinite;
          will-change: transform, opacity;
        }

        @keyframes rlParticles{
          0%,100%{ transform: translateY(0); opacity:.25; }
          50%{ transform: translateY(-10px); opacity:.45; }
        }

        /* =========================
           Card (bigger + spacing)
        ========================== */
        .rl-card{
          position:relative;
          width: min(720px, 92vw); /* bigger */
          padding: 44px 44px;      /* more spacing */
          border-radius: 28px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.10);
          box-shadow: 0 40px 100px rgba(0,0,0,0.55);
          text-align:center;
          z-index: 2;
          overflow:hidden;
        }

        /* Entrance */
        .rl-card{
          animation: rlEnter 900ms cubic-bezier(.2,.8,.2,1) both;
          will-change: transform, opacity;
        }
        @keyframes rlEnter{
          from{ opacity:0; transform: translateY(18px) scale(.985); }
          to{ opacity:1; transform: translateY(0) scale(1); }
        }

        /* Floating */
        .rl-float{
          animation: rlFloat 3.8s ease-in-out infinite;
        }
        @keyframes rlFloat{
          0%,100%{ transform: translateY(0); }
          50%{ transform: translateY(-8px); }
        }

        /* Animated border glow */
        .rl-borderGlow{
          position:absolute; inset:-2px;
          border-radius: 30px;
          background: conic-gradient(
            from 180deg,
            rgba(249,115,22,0.00),
            rgba(249,115,22,0.35),
            rgba(255,255,255,0.18),
            rgba(249,115,22,0.35),
            rgba(249,115,22,0.00)
          );
          filter: blur(10px);
          opacity: .55;
          animation: rlSpin 5.5s linear infinite;
        }
        @keyframes rlSpin{
          to{ transform: rotate(360deg); }
        }

        /* Keep content above glow */
        .rl-card > *{
          position: relative;
          z-index: 1;
        }

        /* =========================
           Icon
        ========================== */
        .rl-iconWrap{
          width: 78px;
          height: 78px;
          margin: 0 auto 18px;
          position:relative;
        }

        .rl-iconRing{
          position:absolute; inset:-10px;
          border-radius: 26px;
          background: radial-gradient(circle at 30% 30%, rgba(249,115,22,0.35), transparent 62%);
          opacity: .9;
        }
        .rl-iconRing::after{
          content:"";
          position:absolute; inset:0;
          border-radius: 26px;
          border: 1px solid rgba(249,115,22,0.35);
          box-shadow: 0 0 0 0 rgba(249,115,22,0.30);
          animation: rlPulse 2.6s ease-in-out infinite;
        }
        @keyframes rlPulse{
          0%{ transform: scale(1); opacity:.75; box-shadow: 0 0 0 0 rgba(249,115,22,0.30); }
          70%{ transform: scale(1.03); opacity:.35; box-shadow: 0 0 0 18px rgba(249,115,22,0); }
          100%{ transform: scale(1); opacity:.75; box-shadow: 0 0 0 0 rgba(249,115,22,0); }
        }

        .rl-icon{
          position:absolute; inset:0;
          display:flex;
          align-items:center;
          justify-content:center;
          border-radius: 22px;
          background: rgba(0,0,0,0.20);
          border: 1px solid rgba(255,255,255,0.10);
          color: #fff;
        }
        .rl-icon svg{ color: rgb(249,115,22); }

        /* =========================
           Text
        ========================== */
        .rl-title{
          font-size: clamp(28px, 3.6vw, 44px);
          font-weight: 900;
          letter-spacing: -0.02em;
          margin: 6px 0 10px;
        }

        .rl-brand{
          color: rgb(249,115,22);
          text-shadow: 0 12px 34px rgba(249,115,22,0.25);
        }

        .rl-subtitle{
          margin: 0 auto;
          max-width: 520px;
          font-size: clamp(14px, 1.5vw, 17px);
          color: rgba(255,255,255,0.78);
          line-height: 1.55;
        }

        .rl-status{
          margin-top: 18px;
          display:flex;
          align-items:center;
          justify-content:center;
          gap: 10px;
          font-size: 12px;
          color: rgba(255,255,255,0.65);
        }

        .rl-dot{
          width: 9px;
          height: 9px;
          border-radius: 999px;
          background: rgb(249,115,22);
          box-shadow: 0 0 0 0 rgba(249,115,22,.55);
          animation: rlDot 1.4s infinite;
        }
        @keyframes rlDot{
          0%{ box-shadow: 0 0 0 0 rgba(249,115,22,.55); }
          70%{ box-shadow: 0 0 0 12px rgba(249,115,22,0); }
          100%{ box-shadow: 0 0 0 0 rgba(249,115,22,0); }
        }

        /* =========================
           Button (bigger)
        ========================== */
        .rl-btn{
          margin-top: 26px;
          padding: 14px 32px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.10);
          background: rgb(249,115,22);
          color: #fff;
          font-weight: 800;
          font-size: 16px;
          cursor:pointer;
          transition: transform .18s ease, box-shadow .18s ease, background-color .18s ease;
          box-shadow: 0 16px 34px rgba(249,115,22,0.18);
        }
        .rl-btn:hover{
          background: rgb(234,88,12);
          transform: translateY(-2px);
          box-shadow: 0 20px 44px rgba(249,115,22,0.22);
        }
        .rl-btn:active{ transform: scale(.98); }

        .rl-hint{
          margin-top: 14px;
          font-size: 12px;
          color: rgba(255,255,255,0.45);
        }

        @media (prefers-reduced-motion: reduce){
          .rl-blob, .rl-particles, .rl-float, .rl-borderGlow, .rl-iconRing::after, .rl-dot{
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
