import styles from "./burger-list.module.css";
import { FC } from "react";
import { TItem } from "../../type/types";
import { REMOVE_ITEM } from "../../services/actions/burger";
import { REMOVE_COUNT } from "../../services/actions/data";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag } from "react-dnd";
import { useAppDispatch } from "../../hooks/use-redux";

interface IItem {
  item: TItem;
}
export const BurgerList: FC<IItem> = ({ item }) => {
  const dispatch = useAppDispatch();

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
};
