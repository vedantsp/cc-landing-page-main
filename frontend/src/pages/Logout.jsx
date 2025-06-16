import { Navigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { useEffect } from "react";
export const Logout = () => {
  const { LogoutUser } = useAuth();

  useEffect(() => {
    LogoutUser();
  }, [LogoutUser]);

  return <Navigate to="/" />;
};
