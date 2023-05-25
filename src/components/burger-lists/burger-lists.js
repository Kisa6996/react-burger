import styles from "./burger-lists.module.css";
import BurgerList from "../burger-list/burger-list";
import BorderBurger from "../border-burger/border-burger";
import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import {SORT} from "../../services/actions/burger"

function BurgerLists() {
  const { bread, topping} = useSelector((state) => state.burgerReducer);
  
  const style = { "--size": topping.length };

  const dispatch = useDispatch()

  // Сортировка ингридиетов
  const [, drop] = useDrop({
    accept: "sort",
    drop(item, monitor) {
      const difference = monitor.getDifferenceFromInitialOffset();
      dispatch({
        type: SORT,
        burger: item,
        y: difference.y
      })
    },
  });


  return (
    <div className={styles.block}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {bread !== null && (
          <BorderBurger
            image={bread.image}
            price={bread.price}
            text={bread.name}
            type="top"
          >
            (вверх)
          </BorderBurger>
        )}
        <div ref={drop} className={styles.scroll} style={style}>
          {topping.length !== 0 &&
            topping.map((item) => (
              <BurgerList item={item} key={item.uuid} />
            ))}
        </div>
        {bread !== null && (
          <BorderBurger
            image={bread.image}
            price={bread.price}
            text={bread.name}
            type="bottom"
          >
            (низ)
          </BorderBurger>
        )}
      </div>
    </div>
  );
}
export default BurgerLists;
