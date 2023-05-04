import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./modal.module.css";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { useMemo, useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const modalRootElement = document.querySelector("#modal");

function Modal({ children, open, onClose, text }) {
  const element = useMemo(() => document.createElement("div"), []);

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
    if (event.code === 'Escape') {
        onClose(false);
    }
}
  useEffect((e) => {
    document.addEventListener('keydown', handleEscapeKey(e))
    return document.removeEventListener('keydown', handleEscapeKey(e))
  },)

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
        <ModalOverlay onClick={onClose}/>
      </div>,
      element
    );
}
ModalOverlay.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  children: PropTypes.elementType.isRequired,
};
export default Modal;
