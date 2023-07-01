import styles from "./border-burger.module.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { FC } from "react";
interface ICards {
  type: "top" | "bottom" | undefined;
  image: string;
  price: number;
  text: string;
  children: string;
}
export const BorderBurger: FC<ICards> = ({
  image,
  price,
  text,
  type,
  children,
}) => {
  return (
    <div className="pl-8">
      <ConstructorElement
        extraClass={styles.element}
        type={type}
        isLocked={true}
        text={text + " " + children}
        price={price}
        thumbnail={image}
      />
    </div>
  );
};

