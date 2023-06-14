export const SET_USER = "SET_USER";
export const SET_USER_FAILED = "SET_USER_FAILED";
export const SET_USER_SUCCESS = "SET_USER_SUCCESS";
export const USER_ISAUTH = "USER_ISAUTH";

export function setRegister(name, password, email) {
  const Api_URL = "https://norma.nomoreparties.space/api/auth/register";
  return function (dispatch) {
    dispatch({
      type: SET_USER,
    });
    fetch(Api_URL, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((res) =>
      res.status !== 403
        ? res.ok
          ? res.json().then((user) => {
              dispatch({
                type: SET_USER_SUCCESS,
                accessToken: user.accessToken,
                refreshToken: user.refreshToken,
              });
            })
          : res.json().then(
              dispatch({
                type: SET_USER_FAILED,
              })
            )
        : res.json().then(
            dispatch({
              type: USER_ISAUTH,
            })
          )
    );
  };
}
