import styles from "./border-burger.module.css";
import PropTypes from "prop-types";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";

function BorderBurger({ image, price, text, type, children }) {
  return (
    <div className="pl-8">
      <ConstructorElement
        extraClass={styles.element}
        type={type}
        isLocked={true}
        text={text + " " + children}
        price={price}
        thumbnail={image}
      />
    </div>
  );
}
BorderBurger.propTypes = {
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};
export default BorderBurger;
