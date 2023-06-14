import { Navigate, useLocation, useNavigate } from "react-router-dom";
import styles from "./forgot-password.module.css";
import { useState } from "react";
import {
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useAuth } from "../../hooks/use-auth";

export function ForgotPassword() {
  const { isAuth } = useAuth();
  const location = useLocation().pathname;
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const onEmail = (e) => {
    setEmail(e.target.value);
    setError(false);
  };

  const navigate = useNavigate();
  function login() {
    navigate("/login");
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (email === "") {
      setError(true);
    } else {
      fetch("https://norma.nomoreparties.space/api/password-reset", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      })
        .then(() => {
          navigate("/reset-password", { state: location });
        })
        .catch((error) => {
          console.error("Произошла ошибка:", error);
        });
    }
  }
  if (isAuth) {
    return <Navigate to="/" replace />;
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1 className="text text_type_main-medium mt-30">Востановление пароля</h1>
      <EmailInput
        errorText="Некорректный Email"
        extraClass="mt-6 mb-6"
        onChange={onEmail}
        value={email}
        name={"email"}
        isIcon={false}
      />
      {error && (
        <p className={`text text_type_main-default ${styles.red} mb-5`}>
          Заполните email
        </p>
      )}
      <Button extraClass="mb-20" htmlType="submit" type="primary" size="large">
        Востановить
      </Button>
      <div className={`text text_type_main-default ${styles.text}`}>
        Вспомнили пароль?
        <Button
          extraClass="p-2"
          htmlType="button"
          type="secondary"
          size="medium"
          onClick={login}
        >
          Войти
        </Button>
      </div>
    </form>
  );
}
