import { Navigate, useNavigate } from "react-router-dom";
import styles from "./register.module.css";
import { useState } from "react";
import { setRegister } from "../../services/actions/token/register";
import {
  PasswordInput,
  EmailInput,
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks/use-auth";

export function Register() {
  const { isRegister, isAuth } = useAuth();
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function login() {
    navigate("/login");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== "" && email !== "" && name !== "") {
      dispatch(setRegister(name, password, email));
    } else {
      setError(true);
    }
  };
  const [name, setName] = useState("");
  const onName = (e) => {
    setName(e.target.value);
    setError(false);
  };
  const [password, setPassword] = useState("");
  const onPassword = (e) => {
    setPassword(e.target.value);
    setError(false);
  };
  const [email, setEmail] = useState("");
  const onEmail = (e) => {
    setEmail(e.target.value);
    setError(false);
  };
  if (isAuth) {
    return <Navigate to="/" replace />;
  }
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h1 className="text text_type_main-medium mt-30">Регестрация</h1>
      <Input
        type={"text"}
        placeholder={"Имя"}
        name={"name"}
        value={name}
        onChange={onName}
        size={"default"}
        extraClass="mt-6"
      />
      <EmailInput
        errorText={"Некорекктный E-mail"}
        extraClass="mt-6"
        onChange={onEmail}
        value={email}
        name={"email"}
        isIcon={false}
      />
      <PasswordInput
        extraClass="mt-6 mb-6"
        errorText={"Введите пароль"}
        onChange={onPassword}
        value={password}
        name={"password"}
      />
      {error && (
        <p className={`text text_type_main-default ${styles.red} mb-5`}>
          Заполните все поля
        </p>
      )}
      {isRegister && (
        <p className={`text text_type_main-default ${styles.red} mb-5`}>
          Пользователь уже существует
        </p>
      )}
      <Button extraClass="mb-20" htmlType="submit" type="primary" size="large">
        Зарегестрироваться
      </Button>
      <div className={`text text_type_main-default ${styles.text}`}>
        Уже зарегистрированы?
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
