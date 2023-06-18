import {
  GET_PROFILE_FAILED,
  GET_PROFILE_SUCCESS,
  SET_PROFILE_SUCCESS,
  GET_PROFILE,
} from "../actions/profile";

const initialState = {
  userRequest: true,
  userFailed: false,
  
  user: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE: {
      return {
        ...state,
        userRequest: true,
        userFailed: false,
      };
    }
    case GET_PROFILE_SUCCESS: {
      return {
        ...state,
        user: action.user,
        userRequest: false,
      };
    }
    case SET_PROFILE_SUCCESS: {
      return {
        ...state,
        user: action.user,
        userRequest: false,
      };
    }
    case GET_PROFILE_FAILED: {
      return {
        ...state,
        userFailed: true,
        userRequest: false,
      };
    }
    default: {
      return state;
    }
  }
};
export default profileReducer;
