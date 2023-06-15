import { BASE_URL } from "../../utils/base-url";
import { request } from "../../utils/request";
export const GET_ORDER = "GET_ORDER";
export const GET_ORDER_FAILED = "GET_ORDER_FAILED";
export const GET_ORDER_SUCCESS = "GET_ORDER_SUCCESS";

export function getOrder(arr) {
  return function (dispatch) {
    const Api_URL = `${BASE_URL}/orders`;
    dispatch({
      type: GET_ORDER,
    });
    request(Api_URL, "POST", { ingredients: arr })
      .then((data) => {
        dispatch({
          type: GET_ORDER_SUCCESS,
          payload: {
            name: data.name,
            orderNumber: data.order.number,
            order: arr,
          },
        });
      })
      .catch(() => {
        dispatch({
          type: GET_ORDER_FAILED,
        });
      });
  };
}
