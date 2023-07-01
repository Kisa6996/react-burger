import {
  PasswordInput,
  Input,
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import { setProfile } from "../../services/actions/profile";
import { useAuth } from "../../hooks/use-auth";
import styles from "./profile.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks/use-redux";

interface TEmailInputInterface {
  onIconClick?: () => void;
}
export function ProfileIndex() {
  const { token } = useAuth();
  const dispatch = useAppDispatch();

  const [disabled, setDisabled] = useState(true);
  const { user, userRequest } = useAppSelector((state) => state.profileReducer);

  const [password, setPassword] = useState("");
  const onPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const [name, setName] = useState(user.name);
  const onName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const [email, setEmail] = useState(user.email);
  const onEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
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
  const handleClickEnter = (e: React.FormEvent<HTMLFormElement>) => {
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
      {user !== null ? (
        <div>
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
          <Input
            onIconClick={handleClickIcon}
            disabled={disabled}
            onChange={onEmail}
            type={"email"}
            value={email}
            name={"email"}
            placeholder="Логин"
            icon="EditIcon"
            extraClass="mt-6 mb-6"
          />
          <Input
            type={"password"}
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
              <Button
                type="secondary"
                htmlType="reset"
                onClick={handleClickCancel}
              >
                Отменить
              </Button>
              <Button type="primary" htmlType="submit">
                Сохранить
              </Button>
            </div>
          )}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </form>
  );
}
