import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./modal.module.css";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { useMemo, useEffect } from "react";
import ReactDOM from "react-dom";
import { useOutletContext } from "react-router-dom";

const modalRootElement = document.querySelector("#modal");

function Modal() {
  const element = useMemo(() => document.createElement("div"), []);
  const [text, open, onClose, children] = useOutletContext();
  useEffect(() => {
    if (open) {
      modalRootElement.appendChild(element);
    }
    return () => {
      if (open) {
        modalRootElement.removeChild(element);
      }
    };
  });
  const handleEscapeKey = () => (event) => {
    if (event.code === "Escape") {
      onClose();
    }
  };
  useEffect((e) => {
    document.addEventListener("keydown", handleEscapeKey(e));
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
      {open && <ModalOverlay onClick={onClose} />}
    </div>,
    element
  );
}
export default Modal;
