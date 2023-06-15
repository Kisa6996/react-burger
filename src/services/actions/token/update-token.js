import { BASE_URL } from "../../../utils/base-url";
import { request } from "../../../utils/request";
export const UPDATE_TOKEN = "UPDATE_TOKEN";
export const UPDATE_TOKEN_FAILED = "UPDATE_TOKEN_FAILED";
export const UPDATE_TOKEN_SUCCESS = "UPDATE_TOKEN_SUCCESS";

export function Update(funk = null, arr = []) {
  const Api_URL = `${BASE_URL}/auth/token`;
  const token = localStorage.getItem("token");
  return function (dispatch) {
    dispatch({
      type: UPDATE_TOKEN,
    });
    request(Api_URL, "POST", { token: token })
      .then((user) => {
        dispatch({
          type: UPDATE_TOKEN_SUCCESS,
          accessToken: user.accessToken,
          refreshToken: user.refreshToken,
        });
        if (funk !== null) {
          arr.push(user.accessToken);
          dispatch(funk.apply(this, arr));
        }
      })
      .catch(() => {
        dispatch({
          type: UPDATE_TOKEN_FAILED,
        });
        localStorage.removeItem("token");
      });
  };
}
