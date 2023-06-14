import {
  PasswordInput,
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./reset-password.module.css";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function ResetPassword() {
  const [error, setError] = useState(false);
  const [errorPost, setErrorPost] = useState(false);
  const navigate = useNavigate();

  function login() {
    navigate("/login");
  }
  const [password, setPassword] = useState("");
  const onPassword = (e) => {
    setPassword(e.target.value);
    setError(false);
    setErrorPost(false);
  };
  const [sms, setSms] = useState("");
  const onSms = (e) => {
    setSms(e.target.value);
    setError(false);
    setErrorPost(false);
  };
  function handleSubmit(e) {
    e.preventDefault();
    if (sms === "" || password === "") {
      setError(true);
    } else {
      fetch("https://norma.nomoreparties.space/api/password-reset/reset", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: password,
          token: sms,
        }),
      }).then((response) => {
        response.ok ? navigate("/") : setErrorPost(true);
      });
    }
  }
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h1 className="text text_type_main-medium mt-30">Востановление пароля</h1>
      <PasswordInput
        placeholder={"Введите новый пароль"}
        onChange={onPassword}
        value={password}
        extraClass="mt-6 mb-6"
      />
      <Input
        type={"text"}
        onChange={onSms}
        value={sms}
        placeholder={"Введите код из письма"}
        name={"sms"}
        errorText={"Ошибка"}
        extraClass="mb-6"
      />
      {error && (
        <p className={`text text_type_main-default ${styles.red} mb-5`}>
          Заполните все поля
        </p>
      )}
      {errorPost && (
        <p className={`text text_type_main-default ${styles.red} mb-5`}>
          Неверный код
        </p>
      )}
      <Button extraClass="mb-20" htmlType="submit" type="primary" size="large">
        Сохранить
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
