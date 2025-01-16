import { Navigate, Outlet } from 'react-router-dom';

// Simulated authentication function
const isAuthenticated = () => {
  return localStorage.getItem("userToken") !== null; // Check if userToken exists
};

function ProtectedRoute() {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
