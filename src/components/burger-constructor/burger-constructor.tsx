
import BurgerLists from "../burger-lists/burger-lists";
import Order from "../order/order";
import { useDrop } from "react-dnd";
import { updateConsrtuctor } from "../../services/actions/burger";
import { updateData } from "../../services/actions/data";
import styles from "./burger-constructor.module.css";
import { v4 as uuidv4 } from "uuid";
import { useAppSelector, useAppDispatch } from "../../hooks/use-redux";

function BurgerConstructor() {
  const {flag} = useAppSelector(state => state.burgerReducer);
  const dispatch = useAppDispatch();

  // Бросок ингрдиента в конструктор
  const [{ isHover }, drop] = useDrop({
    accept: "burger",
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    drop(item) {
      dispatch(updateConsrtuctor(item, uuidv4()));
      dispatch(updateData(item));
    },
  });

  const borderColor = isHover ? styles.borderStyling : styles.borderInvisible;

  return (
    <div ref={drop} className={`mt-25 pl-4 pr-4 ${borderColor}`}>
      {!flag && (
        <h1 className="text text_type_main-large">Перенесите ингредиент</h1>
      )}
      <BurgerLists />
      {flag && <Order />}
    </div>
  );
}

export default BurgerConstructor;
