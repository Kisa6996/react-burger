import { useAppSelector } from "./use-redux";
import { TUseAuth } from "../type/types";

export function useAuth():TUseAuth {
  const { token, answerLogin, answerRegister, } = useAppSelector((state) => state.userReducer);
  return {
    isRegister: answerRegister.isRegister,
    isAuth: !!token,
    answerLogin,
    token: token,
  };
}
