import styles from "./item-nav.module.css";
import PropTypes from "prop-types";

function ItemNav({ icone, children, flag }) {
  return (
    <a href="/" className={`${styles.item} p-5`}>
      {icone}
      {flag && (
        <p className="text text_type_main-default text_color_inactive">
          {children}
        </p>
      )}
      {!flag && <p className="text text_type_main-default">{children}</p>}
    </a>
  );
}

ItemNav.propTypes = {
  icone: PropTypes.object.isRequired,
  children: PropTypes.string.isRequired,
  flag: PropTypes.bool.isRequired,
};

export default ItemNav;
