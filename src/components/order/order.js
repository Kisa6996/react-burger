import styles from "./order.module.css";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";

function Order() {
  const [open, setOpen] = useState(false);
  function onOpen() {
    setOpen(true);
  }

  return (
    <div className={`${styles.block} mt-10`}>
      <div className={styles.cost}>
        <p className="text text_type_main-large">{610}</p>
        <CurrencyIcon type="primary" />
      </div>
      <Button htmlType="button" type="primary" size="large" onClick={onOpen}>
        Оформить заказ
      </Button>
      {open && (
        <Modal open={open} onClose={() => setOpen(false)}>
          <OrderDetails />
        </Modal>
      )}
    </div>
  );
}

export default Order;
