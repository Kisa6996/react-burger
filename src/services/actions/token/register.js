import { BASE_URL } from "../../../utils/base-url";
import { request } from "../../../utils/request";
export const SET_USER = "SET_USER";
export const SET_USER_FAILED = "SET_USER_FAILED";
export const SET_USER_SUCCESS = "SET_USER_SUCCESS";
export const USER_ISAUTH = "USER_ISAUTH";

export function setRegister(name, password, email) {
  const Api_URL = `${BASE_URL}/auth/register`;
  return function (dispatch) {
    dispatch({
      type: SET_USER,
    });
    request(Api_URL, "POST", { email: email, password: password, name: name })
      .then((user) => {
        dispatch({
          type: SET_USER_SUCCESS,
          accessToken: user.accessToken,
          refreshToken: user.refreshToken,
        });
      })
      .catch((res) => {
        if (res === 403) {
          dispatch({
            type: USER_ISAUTH,
          });
        } else {
          dispatch({
            type: SET_USER_FAILED,
          });
        }
      });
  };
}
