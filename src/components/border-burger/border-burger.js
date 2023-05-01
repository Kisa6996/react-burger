import PropTypes from "prop-types";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
function BorderBurger({ image, price, text, type, children }) {
  return (
    <div className="pl-8">
      <ConstructorElement
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
  type: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  text: PropTypes.string,
};
export default BorderBurger;
