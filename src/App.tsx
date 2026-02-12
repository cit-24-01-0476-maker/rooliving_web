import React from "react";
import {
  HashRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
  useParams,
} from "react-router-dom";

// Pages
import WelcomePage from "./pages/WelcomePage";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import HomeDashboard from "./pages/HomeDashboard";

import PlansLibrary from "./pages/PlansLibrary";
import ServicesMarketplace from "./pages/ServicesMarketplace";
import ServiceDetail from "./pages/ServiceDetail";
import BookServiceForm from "./pages/BookServiceForm";
import BookingConfirmation from "./pages/BookingConfirmation";

import LoanContactRequest from "./pages/LoanContactRequest";
import LoanSubmittedSuccess from "./pages/LoanSubmittedSuccess";

import NotificationsPage from "./pages/NotificationsPage";
import ProfileSettings from "./pages/ProfileSettings";

import MyProjectsPage from "./pages/MyProjectsPage";
import ProjectDetail from "./pages/ProjectDetail";

import PlanViewer from "./pages/PlanViewer";
import InspectionStatus from "./pages/InspectionStatus";
import LandInspectionRequest from "./pages/LandInspectionRequest";

import RequirementsStep1 from "./pages/RequirementsStep1";
import RequirementsStep2 from "./pages/RequirementsStep2";
import RequirementsStep3 from "./pages/RequirementsStep3";

/** ✅ Redirect /services/:id  ->  /service/:id */
function ServiceRedirect() {
  const { id } = useParams();
  return <Navigate to={`/service/${id}`} replace />;
}

/** ✅ Redirect /plans/:id -> /plan-viewer?id=...  */
function PlanRedirect() {
  const { id } = useParams();
  return <Navigate to={`/plan-viewer?id=${id ?? ""}`} replace />;
}

/** ✅ Redirect /book-service/:pkg -> /book-service?pkg=...  */
function BookServiceRedirect() {
  const { pkg } = useParams();
  return <Navigate to={`/book-service?pkg=${pkg ?? ""}`} replace />;
}

function NotFound() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold">404</h1>
        <p className="mt-2 text-gray-400">Page not found</p>
      </div>
    </div>
  );
}

/**
 * ✅ WelcomeGate FIX
 * only force /welcome on PUBLIC pages (/, /login, /signup)
 * so internal pages won't go 404 because of gate
 */
function WelcomeGate({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const seen = sessionStorage.getItem("roo_welcome_seen");

  const publicPaths = ["/", "/login", "/signup", "/welcome"];
  const isPublic = publicPaths.includes(location.pathname);

  if (!seen && isPublic && location.pathname !== "/welcome") {
    return <Navigate to="/welcome" replace />;
  }

  return <>{children}</>;
}

export default function App() {
  return (
    // ✅ HashRouter = GitHub Pages direct URL 404 fix
    <HashRouter>
      <WelcomeGate>
        <Routes>
          {/* Welcome */}
          <Route path="/welcome" element={<WelcomePage />} />

          {/* Public */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />

          {/* Dashboard */}
          <Route path="/dashboard" element={<HomeDashboard />} />

          {/* Plans & Services */}
          <Route path="/plans" element={<PlansLibrary />} />
          <Route path="/services" element={<ServicesMarketplace />} />

          {/* ✅ FIX: Some cards/buttons use /services/:id */}
          <Route path="/services/:id" element={<ServiceRedirect />} />

          {/* ✅ Main service detail */}
          <Route path="/service/:id" element={<ServiceDetail />} />

          {/* Booking */}
          <Route path="/book-service" element={<BookServiceForm />} />
          <Route path="/booking-confirmation" element={<BookingConfirmation />} />

          {/* ✅ FIX: Book Basic/Standard/Premium routes */}
          <Route path="/book-service/:pkg" element={<BookServiceRedirect />} />
          <Route path="/book-service-form" element={<Navigate to="/book-service" replace />} />
          <Route path="/booking" element={<Navigate to="/book-service" replace />} />
          <Route path="/book" element={<Navigate to="/book-service" replace />} />

          {/* Booking aliases */}
          <Route path="/booking-confirm" element={<Navigate to="/booking-confirmation" replace />} />
          <Route path="/booking-success" element={<Navigate to="/booking-confirmation" replace />} />
          <Route path="/confirmation" element={<Navigate to="/booking-confirmation" replace />} />

          {/* Loan */}
          <Route path="/loan-contact" element={<LoanContactRequest />} />
          <Route path="/loan-submitted" element={<LoanSubmittedSuccess />} />

          {/* ✅ Loan aliases (fix /loan-request 404) */}
          <Route path="/loan-request" element={<Navigate to="/loan-contact" replace />} />
          <Route path="/loan-contact-request" element={<Navigate to="/loan-contact" replace />} />
          <Route path="/loan-success" element={<Navigate to="/loan-submitted" replace />} />
          <Route path="/loan-request-success" element={<Navigate to="/loan-submitted" replace />} />

          {/* User */}
          <Route path="/notifications" element={<NotificationsPage />} />

          {/* Profile */}
          <Route path="/profile-settings" element={<ProfileSettings />} />
          <Route path="/profile" element={<Navigate to="/profile-settings" replace />} />

          {/* Projects */}
          <Route path="/my-projects" element={<MyProjectsPage />} />
          <Route path="/project/:id" element={<ProjectDetail />} />

          {/* Viewer / Inspection */}
          <Route path="/plan-viewer" element={<PlanViewer />} />
          <Route path="/inspection-status" element={<InspectionStatus />} />
          <Route path="/land-inspection" element={<LandInspectionRequest />} />

          {/* ✅ If somewhere uses /plans/:id */}
          <Route path="/plans/:id" element={<PlanRedirect />} />

          {/* Requirements */}
          <Route path="/requirements/step-1" element={<RequirementsStep1 />} />
          <Route path="/requirements/step-2" element={<RequirementsStep2 />} />
          <Route path="/requirements/step-3" element={<RequirementsStep3 />} />

          {/* ✅ Requirements aliases */}
          <Route path="/requirements/step1" element={<Navigate to="/requirements/step-1" replace />} />
          <Route path="/requirements/step2" element={<Navigate to="/requirements/step-2" replace />} />
          <Route path="/requirements/step3" element={<Navigate to="/requirements/step-3" replace />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </WelcomeGate>
    </HashRouter>
  );
}
