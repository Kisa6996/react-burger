import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";


export const ProtectedRouteElement = ({ element }) => {
  const location = useLocation();
  const { isAuth } = useAuth();

  if (isAuth) {
    return element;
  } else {
    return <Navigate to="/login" replace state={location.pathname} />;
  }
};
