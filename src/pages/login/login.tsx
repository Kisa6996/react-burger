import styles from "./login.module.css";
import { useEffect } from "react";
import { setLogin } from "../../services/actions/token/login";
import {
  PasswordInput,
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";
import { useForm } from "../../hooks/use-form";
import { useAppDispatch } from "../../hooks/use-redux";

export function Login() {
  const { values, handleChange, setError, error } = useForm();
  const location = useLocation();
  const { answerLogin } = useAuth();

  const navigate = useNavigate();
  //error

  // Маршруты
  function registration() {
    navigate("/register");
  }
  function getPassword() {
    navigate("/forgot-password");
  }

  const dispatch = useAppDispatch();

  //submit
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (values.password && values.password.length >= 5 && values.email !== "") {
      dispatch(setLogin(values.password, values.email));
    } else {
      if (values.password === "" || values.email === "") setError(true);
    }
  }

  useEffect(() => {
    if (!answerLogin.userRequest) {
      navigate(location.state);
    }
  }, [answerLogin.userRequest, navigate, location.state]);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1 className="text text_type_main-medium mt-30">Вход</h1>
      <EmailInput
        extraClass="mt-6"
        onChange={handleChange}
        value={values.email || ""}
        name={"email"}
        isIcon={false}
      />
      <PasswordInput
        onChange={handleChange}
        value={values.password || ""}
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
