import Card from "../card/card";
import styles from "./cards.module.css";
import {TCardProps } from "../../type/types";
import { FC } from "react";
interface ICards {
  children: string;
  arr: TCardProps[];
  id: string;
}
export const Cards: FC<ICards> = ({ children, arr, id }) => {
  return (
    <>
      <p className="text text_type_main-medium mb-6 mt-10">{children}</p>
      <div id={id} data-scroll className={`${styles.cards} ml-4`}>
        {arr.map((item) => (
          <Card
            ingredient={item.ingredient}
            key={item.ingredient._id}
            count={item.count}
          />
        ))}
      </div>
    </>
  );
};
