export const ADD_ITEM = "ADD_ITEM";
export const ADD_BUN = "ADD_BUN";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const SORT = "SORT";

export function updateConsrtuctor(item) {
  return function (dispatch) {
    if (item.type === "bun") {
      dispatch({
        type: ADD_BUN,
        payload: item,
      });
    } else {
      dispatch({
        type: ADD_ITEM,
        payload: item,
      });
    }
  };
}
