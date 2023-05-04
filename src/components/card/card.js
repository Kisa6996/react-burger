import styles from "./card.module.css";
import PropTypes from "prop-types";
import ingredients from "../../prop-types/ingredients";
import { useState } from "react";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";

function Card({ data }) {
  const [open, setOpen] = useState(false);
  function onOpen() {
    setOpen(true);
  }
  return (
    <div>
      <div className={styles.card} onClick={onOpen}>
        <img src={data.image} alt="burger" className="pl-4 pr-4" />
        {Boolean(data.__v) && (
          <Counter count={data.__v} size="default" extraClass="m-1" />
        )}
        <div className={`${styles.price} mt-1 mb-1`}>
          <p className="text text_type_main-default">{data.price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <p className={`${styles.text} text text_type_main-default`}>
          {data.name}
        </p>
      </div>
      {open && (
        <Modal
          text="Детали ингредиента"
          open={open}
          onClose={() => setOpen(false)}
        >
          <IngredientDetails data={data} />
        </Modal>
      )}
    </div>
  );
}
Card.propTypes = {
  data: PropTypes.shape(ingredients),
};
export default Card;
