import { BASE_URL } from "../../../utils/base-url";
import { request } from "../../../utils/request";
export const LOGIN = "LOGIN";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ISAUTH = "LOGIN_ISAUTH";

export function setLogin(password, email) {
  const Api_URL = `${BASE_URL}/auth/login`;
  return function (dispatch) {
    dispatch({
      type: LOGIN,
    });
    request(Api_URL, "POST", { email: email, password: password })
      .then((user) => {
        dispatch({
          type: LOGIN_SUCCESS,
          accessToken: user.accessToken,
          refreshToken: user.refreshToken,
        });
      })
      .catch((res) => {
        if (res === 401) {
          dispatch({
            type: LOGIN_ISAUTH,
          });
        } else {
          dispatch({
            type: LOGIN_FAILED,
          });
        }
      });
  };
}
