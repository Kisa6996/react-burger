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
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

function Order() {
  const location = useLocation();
  const { price, topping, bread } = useSelector((state) => state.burgerReducer);
  const { orderNumber, orderRequest } = useSelector(
    (state) => state.orderReducer
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuth } = useAuth();
  const [open, setOpen] = useState(false);
  const Api_URL = "https://norma.nomoreparties.space/api/orders";
  function onOpen() {
    if (isAuth) {
      if (bread !== null) {
        setOpen(true);
        let arr = topping.map((item) => item.structure);
        arr.unshift(bread);
        arr = arr.map((value) => value._id);
        dispatch(getOrder(arr, Api_URL));
      }
    }
  }

  const onClose = () => {
    navigate(-1);
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
      <Link
        to={isAuth ? `/order` : `/login`}
        state={{ backgroundOrder: location }}
        onClick={onOpen}
      >
        <Button htmlType="button" type="primary" size="large">
          Оформить заказ
        </Button>
      </Link>
      {open && !orderRequest && (
        <Outlet
          context={[
            "",
            open,
            onClose,
            !orderRequest ? (
              <OrderDetails number={orderNumber} />
            ) : (
              <div className={styles.error}>Ошибка</div>
            ),
          ]}
        />
      )}
    </div>
  );
}

export default Order;
