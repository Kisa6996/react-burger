import styles from "./order.module.css";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
function Order() {
  return (
    <div className={`${styles.block} mt-10`}>
      <div className={styles.cost}>
        <p className="text text_type_main-large">{610}</p>
        <CurrencyIcon type="primary" />
      </div>
      <Button htmlType="button" type="primary" size="large">
        Оформить заказ
      </Button>
    </div>
  );
}

export default Order;
