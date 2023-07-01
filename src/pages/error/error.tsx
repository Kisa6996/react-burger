import styles from "./error.module.css";
export function Error() {
    return (
      <div className={`${styles.error} text text_type_main-large`}>Ошибка 404 :(</div>
    );
  }