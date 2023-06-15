import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { removeInfo } from "../../services/ingredient";
import AppHeader from "../app-header/app-header";
import {
  Main,
  Error,
  Login,
  Register,
  ForgotPassword,
  Profile,
  ResetPassword,
  Ingredients,
} from "../../pages";
import { ProtectedRouteElement } from "../../HOC/protected-router";
import { RedirectPassword } from "../../HOC/redirect-password";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../../hooks/use-auth";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Update } from "../../services/actions/token/update-token";
import { getProfile } from "../../services/actions/profile";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const background = location.state && location.state.background;
  const { isAuth, token } = useAuth();
  const { user } = useSelector((state) => state.profileReducer);
  const dispatch = useDispatch();

  const [loiding, setLoiding] = useState(false);

  const closeModal = useCallback(() => {
    navigate(-1);
    dispatch(removeInfo());
  }, [navigate, dispatch]);
  const modal = useMemo(() => {
    return (
      <Modal onClose={closeModal} text="Детали ингредиента">
        <IngredientDetails />
      </Modal>
    );
  }, [closeModal]);

  useEffect(() => {
    if (isAuth) {
      dispatch(getProfile(token));
    }
  }, [isAuth, dispatch, token]);

  useEffect(() => {
    if (user !== null) {
      setLoiding(isAuth);
    }
  }, [user, isAuth]);

  useEffect(() => {
    if (localStorage.getItem("token") !== null && token === null) {
      dispatch(Update());
    } else {
      setLoiding(true);
    }
  }, [dispatch, token]);
  return (
    <div>
      {loiding && (
        <div>
          <AppHeader />
          <Routes location={background || location}>
            <Route path="*" element={<Error />} />
            <Route path="/ingredients/:id" element={<Ingredients />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Main />}></Route>
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

          {background && (
            <Routes>
              <Route path="/ingredients/:id" element={modal} />
            </Routes>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
