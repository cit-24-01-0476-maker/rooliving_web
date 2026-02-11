import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import { Download, Maximize, Edit, Home, ArrowLeft } from "lucide-react";

export default function PlanViewer() {
  const { planId } = useParams();
  const navigate = useNavigate();

  // ✅ You can change this file name (put inside: public/plans/)
  // Example path: public/plans/ModernVillaPlan.pdf
  const downloadUrl = "/plans/ModernVillaPlan.pdf";

  const handleRequestChanges = () => {
    // ✅ App.tsx has: /requirements/step-1
    navigate("/requirements/step-1");
  };

  const handleDownloadPlan = () => {
    // ✅ open in new tab (download/preview)
    // If file not found it will open 404 in new tab, so show alert too if needed
    window.open(downloadUrl, "_blank");
  };

  const handleAddToProject = () => {
    // ✅ store selected plan (demo) so you can read it later in MyProjects page
    const key = "roo_project_plans";
    const existing = JSON.parse(localStorage.getItem(key) || "[]");

    const newPlan = {
      planId: planId || "1",
      name: "Modern Villa Plan",
      area: "2,500 sq. ft.",
      addedAt: new Date().toISOString(),
    };

    // prevent duplicates
    const already = existing.some((p: any) => p.planId === newPlan.planId);
    const updated = already ? existing : [newPlan, ...existing];

    localStorage.setItem(key, JSON.stringify(updated));

    // ✅ go to projects
    navigate("/my-projects");
  };

  const handleFullscreen = () => {
    alert("Fullscreen preview is a placeholder in this prototype.");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isLoggedIn={true} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate("/plans")}
          className="flex items-center gap-2 text-gray-600 hover:text-orange-600 mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Plans Library
        </button>

        {/* Plan Viewer */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Plan Preview */}
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-[600px] flex items-center justify-center relative">
            <Home className="w-40 h-40 text-gray-400" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-600 mb-2">2D/3D Plan Preview</p>
                <p className="text-gray-500">Interactive plan viewer placeholder</p>
              </div>
            </div>

            {/* Fullscreen Button */}
            <button
              onClick={handleFullscreen}
              className="absolute top-4 right-4 bg-white p-3 rounded-lg shadow-md hover:bg-gray-50"
              aria-label="Fullscreen"
            >
              <Maximize className="w-5 h-5 text-gray-700" />
            </button>
          </div>

          {/* Plan Info */}
          <div className="p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold text-black mb-2">Modern Villa Plan</h1>
                <p className="text-gray-600">Contemporary design with spacious layout</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-orange-600">2,500 sq. ft.</div>
                <div className="text-sm text-gray-600">Total Area</div>
              </div>
            </div>

            {/* Plan Details Grid */}
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <DetailCard label="Bedrooms" value="3" />
              <DetailCard label="Bathrooms" value="2" />
              <DetailCard label="Floors" value="2" />
              <DetailCard label="Style" value="Contemporary" />
            </div>

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-black mb-3">Key Features</h3>
              <div className="grid md:grid-cols-2 gap-3">
                <Feature text="Open concept living and dining area" />
                <Feature text="Master suite with walk-in closet" />
                <Feature text="Modern kitchen with island" />
                <Feature text="Covered outdoor patio" />
                <Feature text="Two-car garage" />
                <Feature text="Energy-efficient design" />
              </div>
            </div>

            {/* ✅ Action Buttons (NOW WORKING) */}
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" onClick={handleRequestChanges}>
                <Edit className="w-5 h-5 mr-2 inline" />
                Request Changes
              </Button>

              <Button variant="outline" onClick={handleDownloadPlan}>
                <Download className="w-5 h-5 mr-2 inline" />
                Download Plan
              </Button>

              <Button variant="secondary" onClick={handleAddToProject}>
                Add to Project
              </Button>
            </div>

            {/* optional small hint */}
            <p className="text-xs text-gray-500 mt-4">
              Plan ID: {planId || "1"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-gray-50 rounded-lg p-4 text-center">
      <div className="text-2xl font-bold text-black mb-1">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
}

function Feature({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-2 h-2 bg-orange-600 rounded-full" />
      <span className="text-gray-700">{text}</span>
    </div>
  );
}
