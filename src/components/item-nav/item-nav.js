import styles from "./item-nav.module.css";
import PropTypes from 'prop-types';
import React from "react";

function ItemNav({ icone, children, flag }) {
  return (
    <div className={`${styles.item} p-5`}>
      {icone}
      {flag && (
        <p className="text text_type_main-default text_color_inactive">
          {children}
        </p>
      )}
      {!flag && (
        <p>
          {children}
        </p>
      )}
    </div>
  );
}

ItemNav.propTypes = {
  icone:PropTypes.object,
  children:PropTypes.string,
  flag: PropTypes.bool
}; 

export default ItemNav;
