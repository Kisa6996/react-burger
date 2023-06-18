import { Navigate, useLocation } from "react-router-dom";


export const RedirectPassword = ({ element }) => {
  const location = useLocation();
  if (location.state === "/forgot-password") {
    return element;
  } else {
    return <Navigate to="/forgot-password" replace />;
  }
};