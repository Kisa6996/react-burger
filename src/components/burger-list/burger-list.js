import styles from "./burger-list.module.css";
import PropTypes from "prop-types";
import ingredients from "../../prop-types/ingredients";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerContext, PriceContext } from "../../context/contex-app";
import { useContext } from "react";

function BurgerList({ item }) {
  const setBurger = useContext(BurgerContext)[1];
  const [price, setPrice] = useContext(PriceContext);

  function handleClose() {
    setBurger({ type: "remove", info: item, });
    setPrice(price - item.price);
  }
  return (
    <div className={styles.block}>
      <DragIcon type="primary" />
      <ConstructorElement
        text={item.name}
        price={item.price}
        thumbnail={item.image}
        handleClose={handleClose}
      />
    </div>
  );
}
BurgerList.propTypes = {
  item: PropTypes.shape(ingredients),
};
export default BurgerList;
