import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AuthProvider } from './AuthContext';  // Import AuthProvider
import ProtectedRoute from './ProtectedRoute'; // Import ProtectedRoute component
import Dashboard from "./pages/Dashboard";
import PracticeTests from "./pages/PracticeTests";
import MockExams from "./pages/MockExams";
import ReferAndRule from "./pages/ReferAndRule";
import HowToUse from "./pages/HowToUse";
import Settings from "./pages/Settings";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import FrontPage from "./Parts/FrontPage";
import ForgotPasswordPage from "./pages/Forgot_password";
import SideBar from "./DashBoard/SideBar";
import TopBar1 from "./DashBoard/TopBar1";
import { QuestionsProvider } from "./context/questionContext";
import PracticeInstructions from "./pages/PracticeInstructions";
import SidebarSelectQuestion from "./separatequestion/Questiondisplay";
import ResizableLayout from "./componenets/Layout/ResizableLayout";
import CompanyLoginPage from "./company/CompanyLogin";
import CompanySignupPage from "./company/CompanySignup";
import CompanyDashboard from "./company/CompanyDashboard";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  // Don't show SideBar or TopBar1 on company-dashboard
  const isCompanyDashboard = location.pathname === "/company-dashboard";

  return (
    <div className="flex h-screen bg-darkBg">
      {!isCompanyDashboard && (
        <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      )}

      <div
        className={`flex-1 flex flex-col min-h-screen transition-all duration-300 ${
          location.pathname === "/practice-tests" && !isCompanyDashboard
            ? isSidebarOpen
              ? "ml-64"
              : "ml-16"
            : ""
        }`}
      >
        {!isCompanyDashboard && location.pathname !== "/practice-tests" && (
          <TopBar1 />
        )}

        <QuestionsProvider>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<FrontPage />} />
            <Route
              path="/signup"
              element={
                <ProtectedRoute restricted={true}>
                  <SignupPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/login"
              element={
                <ProtectedRoute restricted={true}>
                  <LoginPage />
                </ProtectedRoute>
              }
            />
            <Route path="/company-login" element={<CompanyLoginPage />} />
            <Route path="/company-signup" element={<CompanySignupPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />

            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/practice-tests" element={<PracticeInstructions />} />
              <Route path="/mock-exams" element={<MockExams />} />
              <Route path="/refer-and-rule" element={<ReferAndRule />} />
              <Route path="/how-to-use" element={<HowToUse />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/solve/:id" element={<ResizableLayout />} />
             
            </Route>
            <Route path="/host-test" element={<SidebarSelectQuestion />} />
            <Route path="/company-dashboard" element={<CompanyDashboard />} />
          </Routes>
        </QuestionsProvider>
      </div>
    </div>
  );
}


// Wrap App with Router to use useLocation inside
export default function WrappedApp() {
  return (
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  );
}
