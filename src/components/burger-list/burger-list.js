import styles from "./burger-list.module.css";
import PropTypes from "prop-types";
import ingredients from "../../prop-types/ingredients";
import { REMOVE_ITEM } from "../../services/actions/burger";
import { REMOVE_COUNT } from "../../services/actions/data";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "react-redux";
import { useDrag } from "react-dnd";
function BurgerList({ item }) {
  const dispatch = useDispatch();

  const [{ opacity }, ref] = useDrag({
    type: "sort",
    item: item,
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  });

  function handleClose() {
    dispatch({ type: REMOVE_COUNT, payload: item });
    dispatch({ type: REMOVE_ITEM, payload: item });
  }

  return (
    <div style={{ opacity }} ref={ref} className={styles.block}>
      <DragIcon type="primary" />
      <ConstructorElement
        extraClass={styles.element}
        text={item.structure.name}
        price={item.structure.price}
        thumbnail={item.structure.image}
        handleClose={handleClose}
      />
    </div>
  );
}
BurgerList.propTypes = {
  item: PropTypes.shape({
    structure: PropTypes.shape(ingredients).isRequired,
    uuid: PropTypes.string.isRequired,
  }),
};

export default BurgerList;
