import styles from "./order-details.module.css";
import done from "../../images/done.png";
import { FC } from "react";

interface IOrderDetails {
  number: number;
}

export const OrderDetails: FC<IOrderDetails> = ({ number }) => {
  return (
    <div>
      <div className={styles.container}>
        <h1 className=" text text_type_digits-large">{number}</h1>
        <h2 className="mt-8 mb-15 text text_type_main-medium">
          идентификатор заказа
        </h2>
        <img src={done} alt="done" />
        <p className="mt-15 mb-2 text text_type_main-default">
          Ваш заказ начали готовить
        </p>
        <p className="mb-30 text text_type_main-default text_color_inactive">
          Дождитесь готовности на орбитальной станции
        </p>
      </div>
    </div>
  );
};
