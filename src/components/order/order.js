import styles from "./order.module.css";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import OrderDetails from "../order-details/order-details";
import { useDispatch, useSelector } from "react-redux";
import { getOrder } from "../../services/actions/order";
import { INITIAL } from "../../services/actions/data";
import { CLEAR } from "../../services/actions/burger";
import { useAuth } from "../../hooks/use-auth";

import { useNavigate } from "react-router-dom";
import Modal from "../modal/modal";

function Order() {
  const { price, topping, bread } = useSelector((state) => state.burgerReducer);
  const { orderNumber, orderRequest, orderFailed } = useSelector(
    (state) => state.orderReducer
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuth } = useAuth();
  const [open, setOpen] = useState(false);
  function onOpen() {
    if (isAuth) {
      if (bread !== null) {
        setOpen(true);
        let arr = topping.map((item) => item.structure);
        arr.unshift(bread);
        arr = arr.map((value) => value._id);
        dispatch(getOrder(arr));
      }
    } else {
      navigate("/login");
    }
  }

  const onClose = () => {
    setOpen(false);
    dispatch({ type: CLEAR });
    dispatch({ type: INITIAL });
  };
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
        <Modal onClose={onClose}>
          {!orderFailed ? (
            <OrderDetails number={orderNumber} />
          ) : (
            <div className={styles.error}>Ошибка</div>
          )}
        </Modal>
        // <Outlet
        //   context={[
        //     "",
        //     open,
        //     onClose,
        //     !orderFailed ? (
        //       <OrderDetails number={orderNumber} />
        //     ) : (
        //       <div className={styles.error}>Ошибка</div>
        //     ),
        //   ]}
        // />
      )}
    </div>
  );
}

export default Order;
