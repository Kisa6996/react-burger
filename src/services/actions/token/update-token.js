export const UPDATE_TOKEN = "UPDATE_TOKEN";
export const UPDATE_TOKEN_FAILED = "UPDATE_TOKEN_FAILED";
export const UPDATE_TOKEN_SUCCESS = "UPDATE_TOKEN_SUCCESS";

export function Update(funk = null, arr = []) {
  const Api_URL = "https://norma.nomoreparties.space/api/auth/token";
  const token = localStorage.getItem("token");
  return function (dispatch) {
    dispatch({
      type: UPDATE_TOKEN,
    });
    fetch(Api_URL, {
      method: "POST",
      body: JSON.stringify({
        token: token,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((res) => {
      res.ok
        ? res.json().then((user) => {
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
        : res.json().then(
            localStorage.removeItem("token"),
            dispatch({
              type: UPDATE_TOKEN_FAILED,
            })
          );
    });
  };
}
