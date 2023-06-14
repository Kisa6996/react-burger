import {
  PasswordInput,
  Input,
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProfile } from "../../services/actions/profile";
import { useAuth } from "../../hooks/use-auth";
import styles from "./profile.module.css";

export function ProfileIndex() {
  const { token } = useAuth();
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(true);
  const { user, userRequest } = useSelector((state) => state.profileReducer);

  const [password, setPassword] = useState("");
  const onPassword = (e) => {
    setPassword(e.target.value);
  };
  const [name, setName] = useState(user.name);
  const onName = (e) => {
    setName(e.target.value);
  };
  const [email, setEmail] = useState(user.email);
  const onEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleClickIcon = () => {
    setDisabled(false);
  };
  const handleClickCancel = () => {
    setDisabled(true);
    setPassword("");
    setName(user.name);
    setEmail(user.email);
  };
  const handleClickEnter = (e) => {
    e.preventDefault();
    if (name.length !== 0 && email.length !== 0 && password.length !== 0) {
      dispatch(setProfile(name, email, password, token));
      setDisabled(true);
      setPassword("");
      setName(name);
      setEmail(email);
    }
  };
  return (
    <form onSubmit={handleClickEnter}>
      <Input
        onIconClick={handleClickIcon}
        disabled={disabled}
        type={"text"}
        placeholder={"Имя"}
        icon="EditIcon"
        onChange={onName}
        value={name}
        name={"name"}
      />
      <EmailInput
        onIconClick={handleClickIcon}
        disabled={disabled}
        onChange={onEmail}
        value={email}
        name={"email"}
        placeholder="Логин"
        isIcon={true}
        extraClass="mt-6 mb-6"
      />
      <PasswordInput
        onIconClick={handleClickIcon}
        disabled={disabled}
        onChange={onPassword}
        value={password}
        name={"password"}
        icon="EditIcon"
      />
      {userRequest && (
        <p className={`text text_type_main-default ${styles.info} mb-3`}>
          Данные успешно изменены
        </p>
      )}
      {!disabled && (
        <div className={styles.buttons}>
          <Button type="secondary" htmlType="reset" onClick={handleClickCancel}>
            Отменить
          </Button>
          <Button type="primary" htmlType="submit">
            Сохранить
          </Button>
        </div>
      )}
    </form>
  );
}
