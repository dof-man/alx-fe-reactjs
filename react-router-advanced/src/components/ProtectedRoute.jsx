import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth"; // Import the authentication hook

function ProtectedRoute() {
  const isAuthenticated = useAuth(); // Use the custom hook

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
