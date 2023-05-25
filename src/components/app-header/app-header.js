import styles from "./app-header.module.css";
import ItemNav from "../item-nav/item-nav";
import {
  ListIcon,
  BurgerIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

function AppHeader() {
  return (
    <header className={`${styles.header} p-4`}>
      <nav className={styles.navbar}>
        <div className={styles.link_item}>
          <ItemNav icone={<BurgerIcon type="primary" />} flag={false}>
            Конструктор
          </ItemNav>
          <ItemNav icone={<ListIcon type="secondary" />} flag={true}>
            Лента заказов
          </ItemNav>
        </div>
        <Logo />
        <ItemNav icone={<ProfileIcon type="secondary" />} flag={true}>
          Личный кабинет
        </ItemNav>
      </nav>
    </header>
  );
}

export default AppHeader;
