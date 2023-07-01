import styles from "./modal-overlay.module.css";
import { FC } from "react";

type TModalOverlay = {
  onClick: () => void;
};
export const ModalOverlay: FC<TModalOverlay> = ({ onClick }) => {
  return <div className={styles.overlay} onClick={onClick}></div>;
};

export default ModalOverlay;
