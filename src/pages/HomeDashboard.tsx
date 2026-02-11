import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import {
  Search,
  FileText,
  Hammer,
  Home,
  DollarSign,
  MapPin,
  ArrowRight,
  Lock,
} from "lucide-react";

import { onAuthStateChanged } from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  orderBy,
  query,
  Timestamp,
} from "firebase/firestore";
import { auth, db } from "../firebase";

type Project = {
  id: string;
  name: string;
  status: string;
  progress: number;
  createdAt?: Timestamp | null;
};

export default function HomeDashboard() {
  const navigate = useNavigate();

  // Auth
  const [authReady, setAuthReady] = useState(false);
  const [isAuthed, setIsAuthed] = useState(false);
  const [uid, setUid] = useState<string>("");

  // User display
  const [displayName, setDisplayName] = useState("Guest");
  const [displayEmail, setDisplayEmail] = useState("");

  // Projects (from Firestore)
  const [projects, setProjects] = useState<Project[]>([]);
  const [loadingProjects, setLoadingProjects] = useState(false);

  useEffect(() => {
    let unsubProjects: (() => void) | null = null;

    const unsubAuth = onAuthStateChanged(auth, async (user) => {
      setAuthReady(true);

      // ✅ Logout / not logged in
      if (!user) {
        setIsAuthed(false);
        setUid("");
        setDisplayName("Guest");
        setDisplayEmail("");
        setProjects([]); // ✅ logout -> projects clear
        if (unsubProjects) unsubProjects();
        unsubProjects = null;
        return;
      }

      // ✅ Logged in
      setIsAuthed(true);
      setUid(user.uid);
      setDisplayEmail(user.email || "");

      // Load profile name from users/{uid}
      try {
        const snap = await getDoc(doc(db, "users", user.uid));
        if (snap.exists()) {
          const data = snap.data() as any;
          setDisplayName(data?.name || user.displayName || "User");
        } else {
          setDisplayName(user.displayName || "User");
        }
      } catch {
        setDisplayName(user.displayName || "User");
      }

      // ✅ Subscribe to user projects: users/{uid}/projects
      try {
        setLoadingProjects(true);
        const q = query(
          collection(db, "users", user.uid, "projects"),
          orderBy("createdAt", "desc")
        );

        if (unsubProjects) unsubProjects();
        unsubProjects = onSnapshot(
          q,
          (snap) => {
            const list: Project[] = snap.docs.map((d) => {
              const data = d.data() as any;
              return {
                id: d.id,
                name: data?.name || "Untitled Project",
                status: data?.status || "Planning",
                progress: Number(data?.progress ?? 0),
                createdAt: data?.createdAt || null,
              };
            });
            setProjects(list);
            setLoadingProjects(false);
          },
          () => {
            setProjects([]);
            setLoadingProjects(false);
          }
        );
      } catch {
        setProjects([]);
        setLoadingProjects(false);
      }
    });

    return () => {
      unsubAuth();
      if (unsubProjects) unsubProjects();
    };
  }, []);

  const firstName = useMemo(() => {
    const n = (displayName || "Guest").trim();
    return n.split(" ")[0] || "Guest";
  }, [displayName]);

  // ✅ Public browse allowed, but actions that should save = protect
  const goProtected = (path: string) => {
    if (!isAuthed) {
      navigate("/login");
      return;
    }
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isLoggedIn={isAuthed} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-black mb-2">
            Welcome back, {firstName}!
          </h1>
          <p className="text-gray-600">Let's continue building your dream home.</p>

          {isAuthed && displayEmail && (
            <p className="text-sm text-gray-500 mt-1">{displayEmail}</p>
          )}

          {/* Demo Mode banner */}
          {authReady && !isAuthed && (
            <div className="mt-4 flex items-center justify-between gap-3 rounded-xl border border-orange-200 bg-gradient-to-r from-orange-50 to-white px-4 py-3">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-orange-700" />
                <p className="text-sm text-gray-700">
                  You are viewing <span className="font-semibold">Demo Mode</span>. Log in to save projects and manage your account.
                </p>
              </div>
              <button
                onClick={() => navigate("/login")}
                className="text-sm font-semibold text-orange-700 hover:text-orange-800 hover:underline"
              >
                Log In
              </button>
            </div>
          )}
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for services, plans, or projects..."
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-orange-600 focus:border-transparent"
            />
          </div>
        </div>

        {/* Feature Tiles */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          <FeatureTile
            icon={<FileText className="w-8 h-8" />}
            title="Requirements"
            description="Define your needs"
            onClick={() => goProtected("/requirements/step-1")}
          />
          <FeatureTile
            icon={<Hammer className="w-8 h-8" />}
            title="Services"
            description="Book professionals"
            onClick={() => navigate("/services")}
          />
          <FeatureTile
            icon={<Home className="w-8 h-8" />}
            title="2D/3D Plans"
            description="Browse designs"
            onClick={() => navigate("/plans")}
          />
          <FeatureTile
            icon={<DollarSign className="w-8 h-8" />}
            title="Loan"
            description="Get loan guidance"
            onClick={() => goProtected("/loan-contact")}
          />
          <FeatureTile
            icon={<MapPin className="w-8 h-8" />}
            title="Land Check"
            description="Request inspection"
            onClick={() => goProtected("/land-inspection")}
          />
        </div>

        {/* Projects */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-black">My Project Status</h2>
            <button
              onClick={() => goProtected("/my-projects")}
              className="text-orange-600 hover:text-orange-700 font-medium flex items-center gap-1"
            >
              View All <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {!isAuthed ? (
            <div className="text-center py-10">
              <p className="text-gray-600 mb-3">
                You are in Demo Mode. Log in to create and track projects.
              </p>
              <button
                onClick={() => navigate("/login")}
                className="text-orange-600 font-semibold hover:underline"
              >
                Log In to Continue
              </button>
            </div>
          ) : loadingProjects ? (
            <div className="py-10 text-center text-gray-600">Loading your projects...</div>
          ) : projects.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-gray-600 mb-3">
                You don't have any projects yet.
              </p>
              <button
                onClick={() => navigate("/requirements/step-1")}
                className="text-orange-600 font-semibold hover:underline"
              >
                Start Your First Project
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {projects.map((p) => (
                <div
                  key={p.id}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => navigate(`/project/${p.id}`)}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold text-black">{p.name}</h3>
                      <p className="text-sm text-gray-600">{p.status}</p>
                    </div>
                    <span className="text-sm font-medium text-orange-600">
                      {p.progress}%
                    </span>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-orange-600 h-2 rounded-full"
                      style={{ width: `${p.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

interface FeatureTileProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}

function FeatureTile({ icon, title, description, onClick }: FeatureTileProps) {
  return (
    <button
      onClick={onClick}
      className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow text-left"
    >
      <div className="text-orange-600 mb-3">{icon}</div>
      <h3 className="font-semibold text-black mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </button>
  );
}
