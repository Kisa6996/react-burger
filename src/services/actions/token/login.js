export const LOGIN = "LOGIN";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ISAUTH = "LOGIN_ISAUTH";

export function setLogin(password, email) {
  const Api_URL = "https://norma.nomoreparties.space/api/auth/login";
  return function (dispatch) {
    dispatch({
      type: LOGIN,
    });
    fetch(Api_URL, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((res) => {
      res.status !== 401
        ? res.ok
          ? res.json().then((user) => {
              dispatch({
                type: LOGIN_SUCCESS,
                accessToken: user.accessToken,
                refreshToken: user.refreshToken,
              });
            })
          : res.json().then(
              dispatch({
                type: LOGIN_FAILED,
              })
            )
        : res.json().then(
            dispatch({
              type: LOGIN_ISAUTH,
            })
          );
    });
  };
}
