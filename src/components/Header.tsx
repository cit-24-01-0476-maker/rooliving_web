import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Home, Bell, User, LogOut } from "lucide-react";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";

interface HeaderProps {
  isLoggedIn?: boolean; // keep prop (no breaking), but we will use real auth
}

export default function Header({ isLoggedIn = false }: HeaderProps) {
  const navigate = useNavigate();

  // ✅ Real auth state (works after refresh too)
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setAuthed(!!user);
    });
    return () => unsub();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/"); // after logout show Login/SignUp
  };

  // ✅ Use Firebase state first, fallback to prop
  const loggedIn = authed || isLoggedIn;

  return (
    <header className="bg-[#1a1a1a] border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* ✅ Logo click behavior */}
          <button
            onClick={() => {
              // logged in -> dashboard, not logged -> landing
              if (loggedIn) navigate("/dashboard");
              else navigate("/");
            }}
            className="flex items-center gap-2"
          >
            <Home className="w-6 h-6 text-orange-600" />
            <span className="font-bold text-xl text-white">Roo Living</span>
          </button>

          {loggedIn ? (
            <div className="flex items-center gap-6">
              <Link to="/dashboard" className="text-gray-300 hover:text-orange-600">
                Home
              </Link>
              <Link to="/services" className="text-gray-300 hover:text-orange-600">
                Services
              </Link>
              <Link to="/plans" className="text-gray-300 hover:text-orange-600">
                Plans
              </Link>
              <Link to="/my-projects" className="text-gray-300 hover:text-orange-600">
                My Projects
              </Link>

              <button
                onClick={() => navigate("/notifications")}
                className="relative text-gray-300 hover:text-orange-600"
                aria-label="Notifications"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-orange-600 text-white text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </button>

              <button
                onClick={() => navigate("/profile-settings")}
                className="text-gray-300 hover:text-orange-600"
                aria-label="Profile"
              >
                <User className="w-5 h-5" />
              </button>

              {/* ✅ Logout button added */}
              <button
                onClick={handleLogout}
                className="text-gray-300 hover:text-red-300"
                aria-label="Logout"
                title="Logout"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link to="/login" className="px-4 py-2 text-gray-300 hover:text-orange-600">
                Login
              </Link>
              <Link
                to="/signup"
                className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
