import { Navigate, useLocation } from "react-router-dom";
import { FC, ReactElement } from "react";

interface IRedirectPassword {
  element: ReactElement;
}
export const RedirectPassword: FC<IRedirectPassword> = ({ element }) => {
  const location = useLocation();
  if (location.state === "/forgot-password") {
    return element;
  } else {
    return <Navigate to="/forgot-password" replace />;
  }
};
