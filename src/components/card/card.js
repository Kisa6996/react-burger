import styles from "./card.module.css";
import PropTypes from "prop-types";
import ingredients from "../../prop-types/ingredients";
import { useCallback, useState } from "react";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { addInfo, removeInfo } from "../../services/ingredient";
import { useDispatch } from "react-redux";
import { useDrag } from "react-dnd";

function Card({ data, count}) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  function onOpen() {
    dispatch(addInfo(data));
    setOpen(true);
  }

  const [{ opacity }, ref] = useDrag({
    type: "burger",
    item: data,
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  });

  const onClose = useCallback(() => {
    setOpen(false);
    dispatch(removeInfo());
  }, [dispatch]);

  return (
    <div>
      <div
        style={{ opacity }}
        ref={ref}
        className={styles.card}
        onClick={onOpen}
      >
        <img src={data.image} alt="burger" className="pl-4 pr-4" />
        {count !== 0 && (
          <Counter count={count} size="default" extraClass="m-1" />
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
        <Modal text="Детали ингредиента" open={open} onClose={onClose}>
          <IngredientDetails />
        </Modal>
      )}
    </div>
  );
}
Card.propTypes = {
  data: PropTypes.shape(ingredients).isRequired,
  count: PropTypes.number.isRequired,
};
export default Card;
