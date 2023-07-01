import { useNavigate } from "react-router-dom";
import styles from "./register.module.css";
import { setRegister } from "../../services/actions/token/register";
import {
  PasswordInput,
  EmailInput,
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useAuth } from "../../hooks/use-auth";
import { useForm } from "../../hooks/use-form";
import { useAppDispatch } from "../../hooks/use-redux";

export function Register() {
  const { values, handleChange, setError, error } = useForm();
  const { isRegister} = useAuth();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function login() {
    navigate("/login");
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (values.password !== "" && values.email !== "" && values.name !== "") {
      dispatch(setRegister(values.name, values.password, values.email));
    } else {
      setError(true);
    }
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h1 className="text text_type_main-medium mt-30">Регестрация</h1>
      <Input
        type={"text"}
        placeholder={"Имя"}
        name={"name"}
        value={values.name || ""}
        onChange={handleChange}
        size={"default"}
        extraClass="mt-6"
      />
      <EmailInput
        extraClass="mt-6"
        onChange={handleChange}
        value={values.email || ""}
        name={"email"}
        isIcon={false}
      />
      <PasswordInput
        extraClass="mt-6 mb-6"
        onChange={handleChange}
        value={values.password || ""}
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
