import styles from "./order.module.css";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import { useDispatch, useSelector } from "react-redux";
import { getOrder } from "../../services/actions/order";
function Order() {
  const { price, topping, bread } = useSelector((state) => state.burgerReducer);
  const { orderNumber, orderRequest, orderFailed } = useSelector(
    (state) => state.orderReducer
  );

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const Api_URL = "https://norma.nomoreparties.space/api/orders";
  function onOpen() {
    setOpen(true);
    const arr = topping.map((item) => item.structure);
    arr.unshift(bread);
    dispatch(getOrder(arr, Api_URL));
  }
  return (
    <div className={`${styles.block} mt-10`}>
      <div className={styles.cost}>
        <p className="text text_type_main-large">{price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <Button htmlType="button" type="primary" size="large" onClick={onOpen}>
        Оформить заказ
      </Button>
      {open && !orderRequest && (
        <Modal open={open} onClose={() => setOpen(false)}>
          {!orderFailed ? (
            <OrderDetails number={orderNumber} />
          ) : (
            <div className={styles.error}>Ошибка</div>
          )}
        </Modal>
      )}
    </div>
  );
}

export default Order;
