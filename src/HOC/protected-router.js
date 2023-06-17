import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";

export const ProtectedRouteElement = ({ onlyAnAuth = false, element }) => {
  const location = useLocation();
  const { isAuth } = useAuth();

  if (isAuth && onlyAnAuth) {
    const { from } = location.state || { from: { pathname: "/" } };
    return <Navigate to={from} />;
  }
  if (!isAuth && !onlyAnAuth) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return element;
};
