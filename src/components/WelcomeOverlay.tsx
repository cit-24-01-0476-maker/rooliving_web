import React, { useEffect } from "react";
import { Home } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
  durationMs?: number;
};

export default function WelcomeOverlay({
  open,
  onClose,
  durationMs = 2000,
}: Props) {
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => onClose(), durationMs);
    return () => clearTimeout(t);
  }, [open, onClose, durationMs]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

      {/* card */}
      <div className="relative mx-6 w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-8 text-center shadow-2xl rl-welcome-card">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border border-white/10">
          <Home className="h-7 w-7 text-orange-500" />
        </div>

        <h2 className="text-2xl font-extrabold tracking-tight rl-welcome-title">
          Welcome to <span className="text-orange-500">Roo Living</span>
        </h2>

        <p className="mt-3 text-sm text-gray-300">
          Your dream home — designed &amp; built with ease.
        </p>

        <div className="mt-6 h-2 w-full overflow-hidden rounded-full bg-white/10 border border-white/10">
          <div className="h-full w-full rl-welcome-bar" />
        </div>
      </div>

      <style>
        {`
          .rl-welcome-card{
            animation: rlWelcomeIn .55s ease-out both;
            will-change: transform, opacity, filter;
          }
          @keyframes rlWelcomeIn{
            from{
              opacity: 0;
              transform: translateY(18px) scale(.98);
              filter: blur(6px);
            }
            to{
              opacity: 1;
              transform: translateY(0) scale(1);
              filter: blur(0);
            }
          }

          .rl-welcome-title{
            background: linear-gradient(90deg,#fff,rgba(255,255,255,.55),#fff);
            background-size: 220% 100%;
            -webkit-background-clip:text;
            background-clip:text;
            color: transparent;
            animation: rlShimmer 3.5s ease-in-out infinite;
          }
          @keyframes rlShimmer{
            0%{ background-position: 0% 0%; }
            50%{ background-position: 100% 0%; }
            100%{ background-position: 0% 0%; }
          }

          .rl-welcome-bar{
            background: linear-gradient(90deg, rgba(249,115,22,1), rgba(255,255,255,.35));
            transform: translateX(-100%);
            animation: rlBar 2s linear both;
          }
          @keyframes rlBar{
            to{ transform: translateX(0%); }
          }

          @media (prefers-reduced-motion: reduce){
            .rl-welcome-card, .rl-welcome-title, .rl-welcome-bar{ animation: none !important; }
          }
        `}
      </style>
    </div>
  );
}
