import { Routes, Route, useLocation } from "react-router-dom";
import AppHeader from "./components/app-header/app-header";
import {
  Main,
  Error,
  Login,
  Register,
  ForgotPassword,
  Profile,
  ResetPassword,
  Ingredients,
} from "./pages";
import { ProtectedRouteElement } from "./HOC/protected-router";
import { RedirectPassword } from "./HOC/redirect-password";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "./hooks/use-auth";
import { useEffect, useState } from "react";
import { Update } from "./services/actions/token/update-token";
import { getProfile } from "./services/actions/profile";
import Modal from "./components/modal/modal";

function App() {
  const location = useLocation();
  const backgroundId = location.state && location.state.backgroundId;
  const backgroundOrder = location.state && location.state.backgroundOrder;
  const { isAuth, token } = useAuth();
  const { user } = useSelector((state) => state.profileReducer);
  const dispatch = useDispatch();

  const [loiding, setLoiding] = useState(false);

  useEffect(() => {
    if (isAuth) {
      dispatch(getProfile(token));
    }
  }, [isAuth]);

  useEffect(() => {
    if (user !== null) {
      setLoiding(isAuth);
    }
  }, [user]);

  useEffect(() => {
    if (localStorage.getItem("token") !== null && token === null) {
      dispatch(Update());
    } else {
      setLoiding(true);
    }
  }, [dispatch]);
  return (
    <div>
      {loiding && (
        <div>
          <AppHeader />
          <Routes>
            <Route path="*" element={<Error />} />
            {!backgroundId && (
              <Route path="/ingredients/:id" element={<Ingredients />} />
            )}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Main />}>
              {backgroundId && (
                <Route path="ingredients/:id" element={<Modal />} />
              )}
              {backgroundOrder && <Route path="order" element={<Modal />} />}
            </Route>
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route
              path="/reset-password"
              element={<RedirectPassword element={<ResetPassword />} />}
            />
            <Route
              path="/profile/*"
              element={<ProtectedRouteElement element={<Profile />} />}
            />
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
