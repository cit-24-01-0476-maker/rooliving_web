import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { Folder, Calendar, Clock, ArrowRight, Lock } from "lucide-react";

import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  Timestamp,
} from "firebase/firestore";

type Project = {
  id: string;
  name: string;
  status: string;
  progress: number;
  createdAt?: Timestamp | null;
};

function formatDate(ts?: Timestamp | null) {
  if (!ts) return "—";
  const d = ts.toDate();
  return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}

function timeAgo(ts?: Timestamp | null) {
  if (!ts) return "";
  const now = Date.now();
  const then = ts.toDate().getTime();
  const diff = Math.max(0, now - then);
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "Just now";
  if (mins < 60) return `${mins} min ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs} hours ago`;
  const days = Math.floor(hrs / 24);
  return `${days} days ago`;
}

export default function MyProjectsPage() {
  const navigate = useNavigate();

  const [authReady, setAuthReady] = useState(false);
  const [isAuthed, setIsAuthed] = useState(false);
  const [uid, setUid] = useState("");

  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    let unsubProjects: (() => void) | null = null;

    const unsubAuth = onAuthStateChanged(auth, (user) => {
      setAuthReady(true);

      if (!user) {
        setIsAuthed(false);
        setUid("");
        setProjects([]); // ✅ demo/guest -> no projects
        if (unsubProjects) unsubProjects();
        unsubProjects = null;
        return;
      }

      setIsAuthed(true);
      setUid(user.uid);

      // ✅ subscribe projects for this user only
      setLoading(true);
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
          setLoading(false);
        },
        () => {
          setProjects([]);
          setLoading(false);
        }
      );
    });

    return () => {
      unsubAuth();
      if (unsubProjects) unsubProjects();
    };
  }, []);

  const title = useMemo(() => (isAuthed ? "My Projects" : "Demo Mode"), [isAuthed]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isLoggedIn={isAuthed} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-black mb-2">{title}</h1>
          <p className="text-gray-600">
            Manage and track your home projects
          </p>

          {authReady && !isAuthed && (
            <div className="mt-4 flex items-center justify-between gap-3 rounded-xl border border-orange-200 bg-gradient-to-r from-orange-50 to-white px-4 py-3">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-orange-700" />
                <p className="text-sm text-gray-700">
                  You are viewing <span className="font-semibold">Demo Mode</span>. Log in to see your own projects.
                </p>
              </div>
              <button
                onClick={() => navigate("/login")}
                className="text-sm font-semibold text-orange-700 hover:underline"
              >
                Log In
              </button>
            </div>
          )}
        </div>

        {/* ✅ Guest/Demo -> no projects cards */}
        {!isAuthed ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <p className="text-gray-700 mb-3">
              No projects are shown in Demo Mode.
            </p>
            <p className="text-sm text-gray-500 mb-5">
              Log in with your account to view projects saved under your email.
            </p>
            <button
              onClick={() => navigate("/login")}
              className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
            >
              Go to Login
            </button>
          </div>
        ) : loading ? (
          <div className="py-12 text-center text-gray-600">Loading your projects...</div>
        ) : projects.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <p className="text-gray-700 mb-3">You don't have any projects yet.</p>
            <button
              onClick={() => navigate("/requirements/step-1")}
              className="text-orange-600 font-semibold hover:underline"
            >
              Start Your First Project
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <button
                key={p.id}
                onClick={() => navigate(`/project/${p.id}`)}
                className="text-left bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-orange-50 rounded-lg">
                    <Folder className="w-5 h-5 text-orange-600" />
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                    {p.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-black mb-2">{p.name}</h3>

                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm text-gray-600">Progress</p>
                  <p className="text-sm font-semibold text-orange-600">{p.progress}%</p>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2 mb-5">
                  <div
                    className="bg-orange-600 h-2 rounded-full"
                    style={{ width: `${p.progress}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(p.createdAt)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{timeAgo(p.createdAt)}</span>
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-2 text-orange-600 font-semibold text-sm">
                  Open Project <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
