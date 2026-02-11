import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import { UserPlus } from "lucide-react";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebase";

export default function SignUpPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Basic validations
    if (!formData.agreeTerms) return setError("Please accept the Terms and Privacy Policy.");
    if (formData.password.length < 6) return setError("Password must be at least 6 characters.");
    if (formData.password !== formData.confirmPassword) return setError("Passwords do not match.");

    setLoading(true);
    try {
      // ✅ Firebase Auth signup
      const cred = await createUserWithEmailAndPassword(
        auth,
        formData.email.trim(),
        formData.password
      );

      // ✅ Save user profile in Firestore
      await setDoc(doc(db, "users", cred.user.uid), {
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        createdAt: serverTimestamp(),
      });

      // ✅ Redirect to dashboard (fix 404)
      navigate("/dashboard");
    } catch (err: any) {
      // Friendly messages (optional)
      const msg = err?.message || "Sign up failed.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
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
              <UserPlus className="w-8 h-8 text-orange-600" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
            <p className="text-gray-400">Join Roo Living today</p>
          </div>

          {/* ✅ Error message (UI style match) */}
          {error && (
            <div className="mb-5 px-4 py-3 rounded-lg border border-red-500/30 bg-red-500/10 text-red-200 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-[#1a1a1a] border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-[#1a1a1a] border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                placeholder="+1 234 567 8900"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-[#1a1a1a] border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
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

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-[#1a1a1a] border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                id="agreeTerms"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                required
                className="mt-1 w-4 h-4 text-orange-600 bg-[#1a1a1a] border-gray-700 rounded focus:ring-orange-600"
              />
              <label htmlFor="agreeTerms" className="ml-2 text-sm text-gray-400">
                I agree to the{" "}
                <a href="#" className="text-orange-600 hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-orange-600 hover:underline">
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* ✅ keep your Button UI, add loading/disable */}
            <Button type="submit" fullWidth disabled={loading}>
              {loading ? "Creating..." : "Create Account"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Already have an account?{" "}
              <Link to="/login" className="text-orange-600 font-medium hover:underline">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
