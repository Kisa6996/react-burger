import styles from "./card.module.css";
import PropTypes from "prop-types";
import ingredients from "../../prop-types/ingredients";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { addInfo } from "../../services/ingredient";
import { useDispatch } from "react-redux";
import { useDrag } from "react-dnd";
import { Link, useLocation } from "react-router-dom";

function Card({ data, count }) {
  const location = useLocation();
  const dispatch = useDispatch();

  function onOpen() {
    dispatch(addInfo(data));
  }

  const [{ opacity }, ref] = useDrag({
    type: "burger",
    item: data,
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  });

  return (
    <div>
      <Link to={`/ingredients/${data._id}`} state={{ background: location }}>
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
    </div>
  );
}
Card.propTypes = {
  data: PropTypes.shape(ingredients).isRequired,
  count: PropTypes.number.isRequired,
};
export default Card;
