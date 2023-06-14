import styles from "./card.module.css";
import PropTypes from "prop-types";
import ingredients from "../../prop-types/ingredients";
import { useCallback, useState } from "react";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { addInfo, removeInfo } from "../../services/ingredient";
import { useDispatch } from "react-redux";
import { useDrag } from "react-dnd";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

function Card({ data, count }) {
  const navigate = useNavigate();
  const location = useLocation();
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
    navigate(-1);
    setOpen(false);
    dispatch(removeInfo());
  }, [dispatch]);

  return (
    <div>
      <Link to={`/ingredients/${data._id}`} state={{ backgroundId: location }}>
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
      </Link>
      {open && (
        <Outlet
          context={["Детали ингредиента", open, onClose, <IngredientDetails />]}
        />
      )}
    </div>
  );
}
Card.propTypes = {
  data: PropTypes.shape(ingredients).isRequired,
  count: PropTypes.number.isRequired,
};
export default Card;
