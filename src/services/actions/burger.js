export const ADD_ITEM = "ADD_ITEM";
export const ADD_BUN = "ADD_BUN";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const SORT = "SORT";
export const CLEAR = "CLEAR"

export function updateConsrtuctor(item, uuid) {
    if (item.type === "bun") {
      return({
        type: ADD_BUN,
        payload: {
          item: item,
          uuid: uuid
        }
      });
    } else {
      return({
        type: ADD_ITEM,
        payload: {
          item: item,
          uuid: uuid
        }
      });
    }
}
