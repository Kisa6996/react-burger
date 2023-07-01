import styles from "./structure-item.module.css";
import { FC } from "react";
interface IStructureItem {
  children: string;
  count: number;
}
export const StructureItem: FC<IStructureItem> = ({ children, count }) => {
  return (
    <div
      className={`${styles.struct} text text_type_main-default text_color_inactive`}
    >
      <p>{children}</p>
      <p>{count}</p>
    </div>
  );
};
