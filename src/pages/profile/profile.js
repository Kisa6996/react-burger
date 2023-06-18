import { Route, Routes } from "react-router-dom";
import styles from "./profile.module.css";
import { NavLink } from "react-router-dom";
import { ProfileIndex } from "./profile-index";
import { useDispatch, useSelector } from "react-redux";
import { Exit } from "../../services/actions/token/exit";
import { useEffect } from "react";
import { getProfile } from "../../services/actions/profile";
import { useAuth } from "../../hooks/use-auth";

export function Profile() {
  const { user } = useSelector((state) => state.profileReducer);
  const { token } = useAuth();

  const dispatch = useDispatch();
  useEffect(() => {
    if (user === null) {
      dispatch(getProfile(token));
    }
  }, [token, dispatch, user]);
  function onClick(e) {
    e.preventDefault();
    dispatch(Exit());
  }

  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <div>
          <NavLink end to="/profile">
            {({ isActive }) => (
              <p
                className={`text text_type_main-medium ${
                  isActive ? styles.active : styles.item
                }`}
              >
                Профиль
              </p>
            )}
          </NavLink>
          <NavLink to="/profile/orders">
            {({ isActive }) => (
              <p
                className={`text text_type_main-medium ${
                  isActive ? styles.active : styles.item
                }`}
              >
                История заказов
              </p>
            )}
          </NavLink>
          <NavLink to="/login" onClick={onClick}>
            <p className={`text text_type_main-medium ${styles.item}`}>Выход</p>
          </NavLink>
          <p
            className={`text text_type_main-default text_color_inactive mt-20 ${styles.last}`}
          >
            В этом разделе вы можете изменить свои персональные данные
          </p>
        </div>
        {user && (
          <Routes>
            <Route path="/orders" element={null} />
            <Route path="/" element={<ProfileIndex />} />
          </Routes>
        )}
      </div>
    </div>
  );
}
