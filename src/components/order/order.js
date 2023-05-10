import styles from "./order.module.css";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useEffect, useState } from "react";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import { BurgerContext, BreadContext, PriceContext, NumberContext } from "../../context/contex-app";
import { useContext } from "react";
let arr = [];
function Order() {
  const [burger] = useContext(BurgerContext);
  const [bread] = useContext(BreadContext);
  const [open, setOpen] = useState(false);
  const [number, setNumber] = useContext(NumberContext);
  const [price] = useContext(PriceContext);

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    arr = burger.concat(bread);
  }, [burger, bread]);

  burger.forEach((value) => {
    arr.push(value._id)
  })

  function onOpen() {
    setIsLoading(false)
    setOpen(true);
    fetch("https://norma.nomoreparties.space/api/orders", {
      method: "POST",
      body: JSON.stringify({
        ingredients: arr,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.ok ? res.json() : res.json().then(setError('Ошибка, повторите снова :(')))
      .then((json) => setNumber(json.order.number))
      .finally(() => setIsLoading(true));
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
      {open && isLoading && (
        <Modal open={open} onClose={() => setOpen(false)}>
          {error === '' ? <OrderDetails number={number} />: <div className={styles.error}>{error}</div>}
        </Modal>
        )}
    </div>
  );
}

export default Order;
