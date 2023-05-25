
export const GET_ORDER = "GET_ORDER";
export const GET_ORDER_FAILED = "GET_ORDER_FAILED";
export const GET_ORDER_SUCCESS = "GET_ORDER_SUCCESS";
export function getOrder(arr, Api_URL) {
  return function (dispatch) {
    dispatch({
      type: GET_ORDER,
    });
    fetch(Api_URL, {
      method: "POST",
      body: JSON.stringify({
        ingredients: arr,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((res) =>
      res.ok
        ? res.json().then((data) => {
            dispatch({
              type: GET_ORDER_SUCCESS,
              payload: {
                name: data.name,
                orderNumber: data.order.number,
                order: arr,
              },
            });
          })
        : res.json().then(
            dispatch({
              type: GET_ORDER_FAILED,
            })
          )
    );
  };
}
