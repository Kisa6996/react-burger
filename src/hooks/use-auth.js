import { useSelector } from "react-redux";

export function useAuth() {
  const { token, answerLogin, answerRegister } = useSelector(
    (state) => state.userReducer
  );
  return {
    isRegister: answerRegister.isRegister,
    isAuth: !!token,
    answerLogin,
    token: token,
  };
}
