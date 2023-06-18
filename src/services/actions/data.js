import { BASE_URL } from "../../utils/base-url";
import { request } from "../../utils/request";
export const GET_DATA = "GET_DATA";
export const GET_DATA_FAILED = "GET_DATA_FAILED";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const ADD_COUNT = "ADD_COUNT";
export const REMOVE_COUNT = "REMOVE_COUNT";
export const UPDATE_BUN = "UPDATE_BUN";
export const INITIAL = "INITIAL";

export function getData() {
  const Api_URL = `${BASE_URL}/ingredients`;
  return function (dispatch) {
    dispatch({
      type: GET_DATA,
    });
    request(Api_URL, "GET")
      .then((data) => {
        dispatch({
          type: GET_DATA_SUCCESS,
          data: data.data,
        });
      })
      .catch(() => {
        dispatch({
          type: GET_DATA_FAILED,
        });
      });
  };
}
export function updateData(item) {
  return function (dispatch) {
    if (item.type === "bun") {
      dispatch({
        type: UPDATE_BUN,
        payload: item,
      });
    } else {
      dispatch({
        type: ADD_COUNT,
        payload: item,
      });
    }
  };
}
