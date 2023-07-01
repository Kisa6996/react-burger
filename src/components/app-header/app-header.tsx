import styles from "./app-header.module.css";
import { NavLink} from "react-router-dom";
import {
  ListIcon,
  BurgerIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { FC } from "react";

const AppHeader: FC = () => {
  return (
    <header className={`${styles.header} p-4`}>
      <nav className={styles.navbar}>
        <div className={styles.link_item}>
          <NavLink to="/">
            {({ isActive }) => (
              <div className={styles.item}>
                <BurgerIcon
                  type={
                    isActive
                      ? "primary"
                      : "secondary"
                  }
                />
                <p
                  className={
                    isActive
                      ? "text text_type_main-default"
                      : "text text_type_main-default text_color_inactive"
                  }
                >
                  Конструктор
                </p>
              </div>
            )}
          </NavLink>
          <NavLink to="/history">
            {({ isActive }) => (
              <div className={styles.item}>
                <ListIcon type={isActive ? "primary" : "secondary"} />
                <p
                  className={
                    isActive
                      ? "text text_type_main-default"
                      : "text text_type_main-default text_color_inactive"
                  }
                >
                  Лента заказов
                </p>
              </div>
            )}
          </NavLink>
        </div>
        <Logo />
        <NavLink to="/profile">
          {({ isActive }) => (
            <div className={styles.item}>
              <ProfileIcon type={isActive ? "primary" : "secondary"} />
              <p
                className={
                  isActive
                    ? "text text_type_main-default"
                    : "text text_type_main-default text_color_inactive"
                }
              >
                Личный кабинет
              </p>
            </div>
          )}
        </NavLink>
      </nav>
    </header>
  );
}

export default AppHeader;
