// components/ProtectedRoute.jsx
import { Navigate, useLocation, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ restricted = false, children }) => {
  const { currentUser, isLoading, currentCompanyUser } = useAuth(); // Add currentCompanyUser for company login check
  const location = useLocation();

  // If the auth state is still loading, you can show a loading indicator
  if (isLoading) {
    return <div>Loading...</div>;  // You can replace this with a spinner or animation
  }

  // Redirect to /company-dashboard if already logged in as a company and trying to access company-login page
  if (restricted && currentCompanyUser) {
    return <Navigate to="/company-dashboard" replace />;
  }

  // Redirect to /dashboard if already logged in and trying to access restricted user pages
  if (restricted && currentUser) {
    return <Navigate to="/dashboard" replace />;
  }

  // Redirect to /login if not logged in and trying to access a protected route
  if (!restricted && !currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If using nested routes, render <Outlet />
  return children || <Outlet />;
};

export default ProtectedRoute;
