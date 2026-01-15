import { Navigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import type { JSX } from "react";

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();
  const isAuthenticated = auth?.isAuthenticated ?? false;
  //   return isAuthenticated ? children : <Navigate to="/login" />;
  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/signup" replace state={{ redirectTo: location.pathname }} />
  );
};
