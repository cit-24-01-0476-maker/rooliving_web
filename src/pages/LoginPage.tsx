import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import { LogIn } from "lucide-react";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  // ✅ only email login here (phone not supported unless you build phone auth)
  const isEmail = (value: string) => /\S+@\S+\.\S+/.test(value.trim());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const id = formData.emailOrPhone.trim();
    const pw = formData.password;

    if (!id) return setError("Email is required.");
    if (!isEmail(id)) {
      return setError("Phone login is not enabled. Please use your email.");
    }
    if (pw.length < 6) return setError("Password must be at least 6 characters.");

    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, id, pw);

      // ✅ redirect to dashboard (fix 404)
      navigate("/dashboard");
    } catch (err: any) {
      setError(err?.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      <Header isLoggedIn={false} />

      <div className="max-w-md mx-auto px-4 py-12">
        <div className="bg-[#2a2a2a] rounded-lg shadow-lg p-8 border border-gray-800">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-600/20 rounded-full mb-4">
              <LogIn className="w-8 h-8 text-orange-600" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
            <p className="text-gray-400">Log in to your account</p>
          </div>

          {/* ✅ Error message (UI match) */}
          {error && (
            <div className="mb-5 px-4 py-3 rounded-lg border border-red-500/30 bg-red-500/10 text-red-200 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="emailOrPhone"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Email or Phone
              </label>
              <input
                type="text"
                id="emailOrPhone"
                name="emailOrPhone"
                value={formData.emailOrPhone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-[#1a1a1a] border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                placeholder="john@example.com or +1 234 567 8900"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-[#1a1a1a] border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 text-orange-600 bg-[#1a1a1a] border-gray-700 rounded focus:ring-orange-600"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-gray-400">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-orange-600 hover:underline">
                Forgot password?
              </a>
            </div>

            <Button type="submit" fullWidth disabled={loading}>
              {loading ? "Logging in..." : "Log In"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Don't have an account?{" "}
              <Link to="/signup" className="text-orange-600 font-medium hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
