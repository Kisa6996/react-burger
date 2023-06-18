import { BASE_URL } from "../../utils/base-url";
import { Update } from "./token/update-token";
import { request } from "../../utils/request";
export const GET_PROFILE = "GET_PROFILE";
export const GET_PROFILE_FAILED = "GET_PROFILE_FAILED";
export const GET_PROFILE_SUCCESS = "GET_PROFILE_SUCCESS";

export const SET_PROFILE_SUCCESS = "SET_PROFILE_SUCCESS";

export function getProfile(token) {
  const Api_URL = `${BASE_URL}/auth/user`;
  return function (dispatch) {
    dispatch({
      type: GET_PROFILE,
    });
    request(Api_URL, "GET", null, token)
      .then((user) => {
        dispatch({
          type: GET_PROFILE_SUCCESS,
          user: user.user,
        });
      })
      .catch((res) => {
        if (res === 401) {
          dispatch(Update(getProfile));
        } else {
          dispatch({
            type: GET_PROFILE_FAILED,
          });
        }
      });
  };
}
export function setProfile(name, email, password, token) {
  const Api_URL = `${BASE_URL}/auth/user`;
  return function (dispatch) {
    dispatch({
      type: GET_PROFILE,
    });
    request(
      Api_URL,
      "PATCH",
      {
        name: name,
        email: email,
        password: password,
      },
      token
    )
      .then((user) => {
        dispatch({
          type: SET_PROFILE_SUCCESS,
          user: user.user,
        });
      })
      .catch((res) => {
        if (res === 401) {
          let arr = [name, email, password];
          dispatch(Update(setProfile, arr));
        } else {
          dispatch({
            type: GET_PROFILE_FAILED,
          });
        }
      });
  };
}
