import styles from "./card.module.css";
import PropTypes from "prop-types";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";

function Card({ image, price, name, count }) {
  return (
    <div className={`${styles.card}`}>
      <img src={image} alt="burger" className="pl-4 pr-4" />
      {Boolean(count) && (
        <Counter count={count} size="default" extraClass="m-1" />
      )}
      <div className={`${styles.price} mt-1 mb-1`}>
        <p className="text text_type_main-default">{price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`${styles.text} text text_type_main-default`}>{name}</p>
    </div>
  );
}
Card.propTypes = {
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
};
export default Card;
