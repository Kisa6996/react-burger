import { BASE_URL } from "../../utils/base-url";
import { request } from "../../utils/request";
import {
  PasswordInput,
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./reset-password.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/use-form";

export function ResetPassword() {
  const { values, handleChange, setError, error } = useForm();
  const Api_URL = `${BASE_URL}/password-reset/reset`;
  const [errorPost, setErrorPost] = useState(false);
  const navigate = useNavigate();

  function login() {
    navigate("/login");
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (values.sms === "" || values.password === "") {
      setError(true);
    } else {
      request(Api_URL, "POST", { password: values.password, token: values.sms })
        .then(() => {
          navigate("/");
        })
        .catch(() => {
          setErrorPost(true);
        });
    }
  }
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h1 className="text text_type_main-medium mt-30">Востановление пароля</h1>
      <PasswordInput
        placeholder={"Введите новый пароль"}
        onChange={handleChange}
        name={"password"}
        value={values.password || ""}
        extraClass="mt-6 mb-6"
      />
      <Input
        type={"text"}
        onChange={handleChange}
        value={values.sms || ""}
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
