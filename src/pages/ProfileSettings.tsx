import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import { User, Mail, Phone, MapPin, LogOut } from "lucide-react";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebase";

type FormState = {
  name: string;
  email: string;
  phone: string;
  address1: string;
  address2: string;
};

export default function ProfileSettings() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormState>({
    name: "User",
    email: "",
    phone: "",
    address1: "",
    address2: "",
  });

  const [uid, setUid] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // ✅ Load user profile from Firebase (works after refresh)
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setUid("");
        setFormData({
          name: "User",
          email: "",
          phone: "",
          address1: "",
          address2: "",
        });
        setLoading(false);
        return;
      }

      setUid(user.uid);

      try {
        const snap = await getDoc(doc(db, "users", user.uid));
        if (snap.exists()) {
          const data = snap.data() as any;

          setFormData({
            name: data?.name || user.displayName || "User",
            email: data?.email || user.email || "",
            phone: data?.phone || "",
            address1: data?.address1 || "",
            address2: data?.address2 || "",
          });
        } else {
          // user doc not found yet -> create base view from auth
          setFormData({
            name: user.displayName || "User",
            email: user.email || "",
            phone: "",
            address1: "",
            address2: "",
          });
        }
      } catch {
        // fallback
        setFormData({
          name: user.displayName || "User",
          email: user.email || "",
          phone: "",
          address1: "",
          address2: "",
        });
      } finally {
        setLoading(false);
      }
    });

    return () => unsub();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Save to Firestore (users/{uid})
  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!uid) {
      alert("Please login first.");
      return;
    }

    setSaving(true);
    try {
      await setDoc(
        doc(db, "users", uid),
        {
          name: formData.name.trim(),
          email: formData.email.trim(), // NOTE: this does not change Firebase Auth email
          phone: formData.phone.trim(),
          address1: formData.address1,
          address2: formData.address2,
          updatedAt: serverTimestamp(),
        },
        { merge: true }
      );

      alert("Profile updated successfully!");
    } catch (err: any) {
      alert(err?.message || "Failed to save profile.");
    } finally {
      setSaving(false);
    }
  };

  // ✅ Proper logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } finally {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isLoggedIn={true} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black mb-2">
            Profile & Settings
          </h1>
          <p className="text-gray-600">
            Manage your account information and preferences
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-100 rounded-full mb-3">
                  <User className="w-10 h-10 text-orange-600" />
                </div>

                {/* ✅ Dynamic name/email */}
                <h3 className="font-bold text-black">
                  {loading ? "Loading..." : formData.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {loading ? "" : formData.email}
                </p>
              </div>

              <nav className="space-y-2">
                <button className="w-full text-left px-4 py-2 bg-orange-50 text-orange-700 rounded-lg font-medium">
                  Profile Details
                </button>
                <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                  Saved Addresses
                </button>
                <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                  Security
                </button>
                <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                  Contact Support
                </button>
              </nav>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg font-medium"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-bold text-black mb-6">
                Personal Information
              </h2>

              <form onSubmit={handleSave} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                    disabled={loading}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                    disabled={loading}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                    disabled={loading}
                  />
                </div>

                <Button type="submit" fullWidth disabled={loading || saving}>
                  {saving ? "Saving..." : "Save Changes"}
                </Button>
              </form>
            </div>

            {/* Saved Addresses */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-black">Saved Addresses</h2>
                <button className="text-orange-600 hover:text-orange-700 font-medium text-sm">
                  + Add New
                </button>
              </div>

              <div className="space-y-4">
                <AddressCard
                  icon={<MapPin className="w-5 h-5" />}
                  label="Home"
                  address={formData.address1 || "—"}
                />
                <AddressCard
                  icon={<MapPin className="w-5 h-5" />}
                  label="Work"
                  address={formData.address2 || "—"}
                />
              </div>
            </div>

            {/* Contact Support */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-black mb-4">Contact Support</h2>
              <p className="text-gray-600 mb-4">
                Need help? Send us a message and we'll get back to you within 24 hours.
              </p>
              <textarea
                rows={4}
                placeholder="Describe your issue or question..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent mb-4"
              />
              <Button variant="outline" fullWidth>
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AddressCard({
  icon,
  label,
  address,
}: {
  icon: React.ReactNode;
  label: string;
  address: string;
}) {
  return (
    <div className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg hover:border-orange-600 transition-colors">
      <div className="bg-orange-100 p-2 rounded-lg text-orange-600">{icon}</div>
      <div className="flex-1">
        <p className="font-medium text-black mb-1">{label}</p>
        <p className="text-sm text-gray-600">{address}</p>
      </div>
      <button className="text-sm text-orange-600 hover:underline">Edit</button>
    </div>
  );
}
