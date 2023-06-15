import { BASE_URL } from "../../../utils/base-url";
import { request } from "../../../utils/request";
export const EXIT = "EXIT";
export const EXIT_FAILED = "EXIT_FAILED";
export const EXIT_SUCCESS = "EXIT_SUCCESS";

export function Exit() {
  const Api_URL = `${BASE_URL}/auth/logout`;
  const token = localStorage.getItem("token");
  return function (dispatch) {
    dispatch({
      type: EXIT,
    });
    request(Api_URL, "POST", { token: token })
      .then(() => {
        dispatch({
          type: EXIT_SUCCESS,
        });
      })
      .catch(() => {
        dispatch({
          type: EXIT_FAILED,
        });
      });
  };
}
