import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./modal.module.css";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { useMemo, useEffect } from "react";
import ReactDOM from "react-dom";
import { FC } from "react";

interface IModal {
  onClose: () => void;
  text?: string;
  children?: React.ReactNode;
}

const modalRootElement = document.querySelector("#modal");

export const Modal: FC<IModal> = ({ onClose, text, children }) => {
  const element = useMemo<HTMLDivElement>(
    () => document.createElement("div"),
    []
  ); //??

  useEffect(() => {
    if (modalRootElement) {
      modalRootElement.appendChild(element);
    }
    return () => {
      if (modalRootElement) {
        modalRootElement.removeChild(element);
      }
    };
  });
  const handleEscapeKey = () => (event: KeyboardEvent) => {
    if (event.code === "Escape") {
      onClose();
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", handleEscapeKey);
    return document.removeEventListener("keydown", handleEscapeKey);
  });
  return ReactDOM.createPortal(
    <div className={styles.modal}>
      <div className={styles.modalWindow}>
        <div className={styles.block}>
          <div className={`${styles.title} text text_type_main-large`}>
            {text}
          </div>
          <CloseIcon type="primary" onClick={onClose} />
        </div>
        {children}
      </div>
      <ModalOverlay onClick={onClose} />
    </div>,
    element
  );
};
