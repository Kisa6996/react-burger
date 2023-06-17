import { BASE_URL } from "../../utils/base-url";
import { request } from "../../utils/request";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import styles from "./forgot-password.module.css";
import {
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useAuth } from "../../hooks/use-auth";
import { useForm } from "../../hooks/use-form";

export function ForgotPassword() {
  const { values, handleChange, setError, error } = useForm({});
  const Api_URL = `${BASE_URL}/password-reset`;
  const { isAuth } = useAuth();
  const location = useLocation().pathname;

  const navigate = useNavigate();
  function login() {
    navigate("/login");
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (values.email === "") {
      setError(true);
    } else {
      request(Api_URL, "POST", { email: values.email })
        .then(() => {
          navigate("/reset-password", { state: location });
        })
        .catch(() => {
          console.log("Произошла ошибка");
        });
    }
  }
  console.log(1)
  if (isAuth) {
    return <Navigate to="/" replace />;
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1 className="text text_type_main-medium mt-30">Востановление пароля</h1>
      <EmailInput
        errorText="Некорректный Email"
        extraClass="mt-6 mb-6"
        onChange={handleChange}
        value={values.email || ""}
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
