import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { Home, Hammer, DollarSign, Search, Users, Award } from "lucide-react";

export default function LandingPage() {
  const navigate = useNavigate();

  // ✅ Put your video file here (public/bg/hero.mp4)
  const base = import.meta.env.BASE_URL || "/";
  const videoSrc = `${base}bg/hero.mp4`;

  // If video fails to load, fallback to dark gradient (no 404)
  const [videoOk, setVideoOk] = useState(true);

  // ✅ Optional: reduce motion users
  const [reduceMotion, setReduceMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(!!mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  return (
    <div className="min-h-screen bg-[#1a1a1a] fx-page relative overflow-hidden rl-font">
      <div className="relative z-10">
        <Header isLoggedIn={false} />
      </div>

      {/* ✅ Background Video (replaces photo) */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="rl-base" />

        {videoOk ? (
          <video
            className="rl-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onError={() => setVideoOk(false)}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : (
          <div className="rl-fallbackGradient" />
        )}

        <div className="rl-overlay" />
      </div>

      <div className="relative z-10">
        {/* Hero */}
        <section className="py-20 fx-reveal bg-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center rl-heroGlass">
              <h1 className="text-5xl font-bold text-white mb-6 rl-heroTitle">
                Your Dream Home,
                <br />
                Designed & Built with Ease
              </h1>

              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto rl-heroDesc">
                Plan your house and landscape, connect with service providers, and
                get loan guidance — all in one platform.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap justify-center gap-4 rl-btnRow">
                <button
                  className="rl-heroBtn rl-gradMove rl-softBlink"
                  onClick={() => navigate("/plans")}
                >
                  Explore Plans
                </button>
                <button
                  className="rl-heroBtn rl-gradMove rl-softBlink"
                  onClick={() => navigate("/services")}
                >
                  Book Services
                </button>

                {/* ✅ FIX: Your App route is /loan-contact (not /loan-request) */}
                <button
                  className="rl-heroBtn rl-gradMove rl-softBlink"
                  onClick={() => navigate("/loan-contact")}
                >
                  Request Loan
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 fx-reveal bg-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Everything You Need in One Place
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Home className="w-12 h-12 text-orange-600" />}
                title="2D & 3D House Plans"
                description="Browse and customize professional house and landscape designs tailored to your needs."
              />
              <FeatureCard
                icon={<Hammer className="w-12 h-12 text-orange-600" />}
                title="Service Marketplace"
                description="Connect with verified painters, gardeners, contractors, electricians, and more."
              />
              <FeatureCard
                icon={<DollarSign className="w-12 h-12 text-orange-600" />}
                title="Loan Assistance"
                description="Get connected with bank officers for home loan guidance through our platform."
              />
              <FeatureCard
                icon={<Search className="w-12 h-12 text-orange-600" />}
                title="Land Inspection"
                description="Request professional land inspections to verify your property details."
              />
              <FeatureCard
                icon={<Users className="w-12 h-12 text-orange-600" />}
                title="Project Management"
                description="Track all your requirements, services, and progress in one dashboard."
              />
              <FeatureCard
                icon={<Award className="w-12 h-12 text-orange-600" />}
                title="Trusted Partners"
                description="Work with verified service providers rated by real homeowners."
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 fx-reveal rl-ctaBlend">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center rl-ctaGlass">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-orange-50 mb-8">
              Join thousands of homeowners building their dream homes.
            </p>

            <button
              className="rl-heroBtn rl-gradMove rl-softBlink"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-white py-12 fx-reveal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4">Roo Living</h3>
                <p className="text-gray-400">
                  Your complete home design and service coordination platform.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Platform</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>House Plans</li>
                  <li>Services</li>
                  <li>Loan Assistance</li>
                  <li>Land Inspection</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>About Us</li>
                  <li>Contact</li>
                  <li>Careers</li>
                  <li>Partners</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Help Center</li>
                  <li>Terms of Service</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2026 Roo Living. Academic UI/UX Prototype - CS2311</p>
            </div>
          </div>
        </footer>
      </div>

      <style>
        {`
          .rl-font{
            font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Inter, Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif;
          }

          .rl-base{ position:absolute; inset:0; background:#1a1a1a; }

          /* ✅ Video layer */
          .rl-video{
            position:absolute;
            inset:0;
            width:100%;
            height:100%;
            object-fit: cover;
            object-position:center;
            filter: saturate(1.04) contrast(1.04);
            transform: scale(1.02);
          }

          .rl-overlay{
            position:absolute; inset:0;
            background:
              radial-gradient(circle at 30% 20%, rgba(249,115,22,0.10), transparent 55%),
              linear-gradient(to bottom, rgba(0,0,0,0.78), rgba(0,0,0,0.86));
          }

          .rl-fallbackGradient{
            position:absolute; inset:0;
            background:
              radial-gradient(circle at 30% 20%, rgba(249,115,22,0.10), transparent 55%),
              radial-gradient(circle at 75% 70%, rgba(255,255,255,0.06), transparent 55%),
              linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.25));
          }

          .rl-heroGlass{
            background: rgba(0,0,0,0.34);
            border: 1px solid rgba(255,255,255,0.10);
            border-radius: 20px;
            padding: 44px 26px;
            backdrop-filter: blur(7px);
          }

          /* ✅ Buttons */
          .rl-btnRow .rl-heroBtn, .rl-ctaGlass .rl-heroBtn{
            min-width: 190px;
            height: 56px;
            padding: 0 28px;
            border-radius: 16px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-weight: 800;
            font-size: 15px;
            letter-spacing: .3px;

            color: #ffffff;
            border: none;
            outline: none;
            cursor: pointer;

            background: linear-gradient(110deg, #ff7a18, #ff9a3d, #ff6a00, #ff8a2a);
            background-size: 260% 260%;

            box-shadow:
              0 14px 40px rgba(249,115,22,0.28),
              0 2px 0 rgba(255,255,255,0.10) inset;

            position: relative;
            overflow: hidden;
            transition: transform 220ms ease, box-shadow 220ms ease, filter 220ms ease;
          }

          .rl-btnRow .rl-heroBtn:focus-visible,
          .rl-ctaGlass .rl-heroBtn:focus-visible{
            box-shadow:
              0 18px 60px rgba(249,115,22,0.42),
              0 0 0 3px rgba(249,115,22,0.35);
          }

          .rl-gradMove{ animation: rlGradMove 6.5s ease-in-out infinite; }
          @keyframes rlGradMove{
            0%{ background-position: 0% 50%; }
            50%{ background-position: 100% 50%; }
            100%{ background-position: 0% 50%; }
          }

          .rl-btnRow .rl-heroBtn::after, .rl-ctaGlass .rl-heroBtn::after{
            content:"";
            position:absolute;
            top:-45%;
            left:-70%;
            width: 70%;
            height: 200%;
            background: linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.30), rgba(255,255,255,0));
            transform: rotate(18deg);
            opacity: 0;
            transition: left 600ms ease, opacity 220ms ease;
            pointer-events:none;
          }

          .rl-btnRow .rl-heroBtn:hover, .rl-ctaGlass .rl-heroBtn:hover{
            transform: translateY(-2px);
            box-shadow:
              0 22px 80px rgba(249,115,22,0.45),
              0 2px 0 rgba(255,255,255,0.12) inset;
            filter: saturate(1.05);
          }
          .rl-btnRow .rl-heroBtn:hover::after, .rl-ctaGlass .rl-heroBtn:hover::after{
            left: 125%;
            opacity: 1;
          }
          .rl-btnRow .rl-heroBtn:active, .rl-ctaGlass .rl-heroBtn:active{
            transform: translateY(0px) scale(0.985);
            box-shadow:
              0 16px 55px rgba(249,115,22,0.34),
              0 2px 0 rgba(255,255,255,0.12) inset;
          }

          .rl-softBlink{ animation: rlSoftBlink 2.8s ease-in-out infinite; }
          @keyframes rlSoftBlink{
            0%,100%{ box-shadow: 0 14px 40px rgba(249,115,22,0.28), 0 2px 0 rgba(255,255,255,0.10) inset; }
            50%{ box-shadow: 0 20px 70px rgba(249,115,22,0.48), 0 2px 0 rgba(255,255,255,0.12) inset; }
          }

          /* Cards: color mix */
          .rl-featureCard{
            position: relative;
            overflow: hidden;
            transform: translateZ(0);
            transition: transform 240ms ease, box-shadow 240ms ease, border-color 240ms ease;
          }
          .rl-featureCard::before{
            content:"";
            position:absolute; inset:-2px;
            background: linear-gradient(120deg,
              rgba(249,115,22,0.00),
              rgba(249,115,22,0.18),
              rgba(255,154,61,0.10),
              rgba(249,115,22,0.00)
            );
            background-size: 260% 260%;
            opacity: 0.75;
            mix-blend-mode: screen;
            animation: rlGradMove 8s ease-in-out infinite;
            pointer-events:none;
          }
          .rl-featureCard::after{
            content:"";
            position:absolute; inset:0;
            background: radial-gradient(circle at 20% 20%, rgba(249,115,22,0.18), transparent 55%);
            opacity: 0;
            transition: opacity 240ms ease;
            pointer-events:none;
          }
          .rl-featureCard:hover{
            transform: translateY(-7px);
            box-shadow: 0 26px 80px rgba(0,0,0,0.55);
            border-color: rgba(249,115,22,0.75) !important;
          }
          .rl-featureCard:hover::after{ opacity: 1; }

          /* CTA */
          .rl-ctaBlend{ position: relative; background: transparent; overflow: hidden; }
          .rl-ctaBlend::before{
            content:"";
            position:absolute; inset:0;
            background:
              radial-gradient(circle at 20% 30%, rgba(249,115,22,0.45), transparent 60%),
              radial-gradient(circle at 80% 70%, rgba(249,115,22,0.25), transparent 62%);
            opacity: .9;
            pointer-events:none;
          }
          .rl-ctaGlass{
            position: relative;
            z-index: 1;
            padding: 56px 28px;
            border-radius: 22px;
            background: rgba(0,0,0,0.30);
            border: 1px solid rgba(255,255,255,0.12);
            backdrop-filter: blur(8px);
            box-shadow: 0 28px 80px rgba(0,0,0,0.45);
          }

          /* ✅ RESPONSIVE (Desktop + Mobile) */
          @media (max-width: 1024px){
            .rl-heroGlass{ padding: 38px 22px; border-radius: 18px; }
            .rl-video{ transform: scale(1.04); }
          }

          @media (max-width: 768px){
            .rl-heroGlass{ padding: 32px 18px; border-radius: 16px; }
            .rl-heroTitle{ font-size: 2.2rem !important; line-height: 1.15 !important; }
            .rl-heroDesc{ font-size: 1.05rem !important; }
            .rl-btnRow{ gap: 12px !important; }
            .rl-btnRow .rl-heroBtn{
              min-width: 160px;
              height: 52px;
              padding: 0 18px;
              border-radius: 14px;
              font-size: 14px;
            }
            .rl-overlay{
              background:
                radial-gradient(circle at 30% 20%, rgba(249,115,22,0.12), transparent 55%),
                linear-gradient(to bottom, rgba(0,0,0,0.82), rgba(0,0,0,0.90));
            }
          }

          @media (max-width: 480px){
            .rl-heroGlass{ padding: 24px 14px; border-radius: 14px; }
            .rl-heroTitle{ font-size: 1.75rem !important; line-height: 1.15 !important; margin-bottom: 16px !important; }
            .rl-heroDesc{ font-size: 0.95rem !important; margin-bottom: 18px !important; }
            .rl-btnRow{ flex-direction: column; align-items: stretch; }
            .rl-btnRow .rl-heroBtn{ width: 100%; min-width: unset; height: 50px; }
          }

          /* ✅ Reduce motion */
          ${reduceMotion ? `
            .rl-gradMove, .rl-softBlink{ animation: none !important; }
            .rl-featureCard::before{ animation: none !important; }
          ` : ""}

          @media (prefers-reduced-motion: reduce){
            .rl-gradMove, .rl-softBlink{ animation: none !important; }
            .rl-featureCard::before{ animation: none !important; }
          }
        `}
      </style>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="fx-card fx-reveal rl-featureCard p-6 border border-gray-700 bg-[#2a2a2a] rounded-lg transition-all">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}
