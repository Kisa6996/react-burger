export const EXIT = "EXIT";
export const EXIT_FAILED = "EXIT_FAILED";
export const EXIT_SUCCESS = "EXIT_SUCCESS";

export function Exit() {
  const Api_URL = "https://norma.nomoreparties.space/api/auth/logout"
  const token = localStorage.getItem("token")
  return function (dispatch) {
    dispatch({
      type: EXIT,
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
        ? res.json().then(() => {
            dispatch({
              type: EXIT_SUCCESS,
            });
          })
        : res.json().then(
            dispatch({
              type: EXIT_FAILED,
            })
          );
    });
  };
}
