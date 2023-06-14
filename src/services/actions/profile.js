import { Update } from "./token/update-token";
export const GET_PROFILE = "GET_PROFILE";
export const GET_PROFILE_FAILED = "GET_PROFILE_FAILED";
export const GET_PROFILE_SUCCESS = "GET_PROFILE_SUCCESS";

export const SET_PROFILE_SUCCESS = "SET_PROFILE_SUCCESS";

export function getProfile(token) {
  let Api_URL = "https://norma.nomoreparties.space/api/auth/user";
  return function (dispatch) {
    dispatch({
      type: GET_PROFILE,
    });
    fetch(Api_URL, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: token,
      },
    }).then((res) => {
      res.status !== 401
        ? res.ok
          ? res.json().then((user) => {
              dispatch({
                type: GET_PROFILE_SUCCESS,
                user: user.user,
              });
            })
          : res.json().then(
              dispatch({
                type: GET_PROFILE_FAILED,
              })
            )
        : res.json().then(dispatch(Update(getProfile)));
    });
  };
}
export function setProfile(name, email, password, token) {
  const Api_URL = "https://norma.nomoreparties.space/api/auth/user";
  return function (dispatch) {
    dispatch({
      type: GET_PROFILE,
    });
    fetch(Api_URL, {
      method: "PATCH",
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: token,
      },
    }).then((res) => {
      res.status !== 401
        ? res.ok
          ? res.json().then((user) => {
              dispatch({
                type: SET_PROFILE_SUCCESS,
                user: user.user,
              });
            })
          : res.json().then(
              dispatch({
                type: GET_PROFILE_FAILED,
              })
            )
        : res.json().then(() => {
            let arr = [name, email, password];
            dispatch(Update(setProfile, arr));
          });
    });
  };
}
