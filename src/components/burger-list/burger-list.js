import styles from './burger-list.module.css'
import PropTypes from "prop-types";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";


function BurgerList({ name, price, image }) {
  return (
    <div className={styles.block}>
      <DragIcon type="primary" />
      <ConstructorElement
        text={name}
        price={price}
        thumbnail={image}
      />
    </div>
  );
}
BurgerList.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,

};
export default BurgerList;
