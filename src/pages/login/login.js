import styles from "./login.module.css";
import { useEffect, useState } from "react";
import { setLogin } from "../../services/actions/token/login";
import {
  PasswordInput,
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks/use-auth";

export function Login() {
  const { isAuth } = useAuth();
  const location = useLocation();
  const { answerLogin } = useAuth();

  const navigate = useNavigate();
  //error
  const [error, setError] = useState(false);

  // Маршруты
  function registration() {
    navigate("/register");
  }
  function getPassword() {
    navigate("/forgot-password");
  }

  // input
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

  const dispatch = useDispatch();

  //submit
  function handleSubmit(e) {
    e.preventDefault();
    if (password.length >= 5 && email !== "") {
      dispatch(setLogin(password, email));
    } else {
      if (password === "" || email === "") setError(true);
    }
  }

  useEffect(() => {
    if (!answerLogin.userRequest) {
      navigate(location.state);
    }
  }, [answerLogin.userRequest, navigate, location.state]);

  if (isAuth) {
    return <Navigate to="/" replace />;
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1 className="text text_type_main-medium mt-30">Вход</h1>
      <EmailInput
        errorText="Некорректный Email"
        extraClass="mt-6"
        onChange={onEmail}
        value={email}
        name={"email"}
        isIcon={false}
      />
      <PasswordInput
        errorText="Пароль должен содержать более 5 символов"
        onChange={onPassword}
        value={password}
        name={"password"}
        extraClass="mt-6 mb-6"
      />
      {answerLogin.isLogin && (
        <p className={`text text_type_main-default ${styles.red} mb-3`}>
          Неверный логин или пароль
        </p>
      )}
      {error && (
        <p className={`text text_type_main-default ${styles.red} mb-3`}>
          Заполните все поля
        </p>
      )}
      <Button extraClass="mb-20" htmlType="submit" type="primary" size="large">
        Войти
      </Button>
      <div className={`text text_type_main-default ${styles.text}`}>
        Вы — новый пользователь?
        <Button
          extraClass="p-2"
          htmlType="button"
          type="secondary"
          size="medium"
          onClick={registration}
        >
          Зарегестрироваться
        </Button>
      </div>
      <div className={`text text_type_main-default ${styles.text}`}>
        Забыли пароль?
        <Button
          extraClass="p-2"
          htmlType="button"
          type="secondary"
          size="medium"
          onClick={getPassword}
        >
          Востановить пароль
        </Button>
      </div>
    </form>
  );
}
