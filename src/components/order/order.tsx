import styles from "./order.module.css";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import { OrderDetails } from "../order-details/order-details";
import { getOrder } from "../../services/actions/order";
import { INITIAL } from "../../services/actions/data";
import { CLEAR } from "../../services/actions/burger";
import { useAuth } from "../../hooks/use-auth";
import { TIngredients, TUseAuth} from "../../type/types";

import { useNavigate } from "react-router-dom";
import { Modal } from "../modal/modal";
import { useAppDispatch, useAppSelector } from "../../hooks/use-redux";

function Order() {
  const { price, topping, bread } = useAppSelector(
    (state) => state.burgerReducer
  ); 
  const { orderNumber, orderRequest, orderFailed } = useAppSelector(
    (state) => state.orderReducer
  );

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { isAuth } = useAuth(); 
  const [open, setOpen] = useState<boolean>(false);
  function onOpen() {
    if (isAuth) {
      if (bread !== null) {
        setOpen(true);
        let arr: TIngredients[] = topping.map((item) => item.structure);
        arr.unshift(bread);
        let arr1 = arr.map((value: TIngredients) => value._id);
        dispatch(getOrder(arr1));
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
      )}
    </div>
  );
}

export default Order;
