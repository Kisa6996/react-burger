import {
  UPDATE_TOKEN_FAILED,
  UPDATE_TOKEN_SUCCESS,
  UPDATE_TOKEN,
} from "../actions/token/update-token";
import {
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGIN,
  LOGIN_ISAUTH,
} from "../actions/token/login";

import {
  SET_USER,
  SET_USER_FAILED,
  SET_USER_SUCCESS,
  USER_ISAUTH,
} from "../actions/token/register";

import { EXIT_FAILED, EXIT_SUCCESS, EXIT } from "../actions/token/exit";

const initialState = {
  answerUpdate: {
    userRequest: true,
    userFailed: false,
  },
  answerRegister: {
    userRequest: true,
    userFailed: false,
    isRegister: false,
  },

  answerLogin: {
    userRequest: true,
    userFailed: false,
    isLogin: false,
  },

  answerExit: {
    userRequest: true,
    userFailed: false,
  },

  token: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    //Вход
    case LOGIN: {
      return {
        ...state,
        answerLogin: {
          ...state.answerLogin,
          userRequest: true,
          userFailed: false,
        },
      };
    }
    case LOGIN_SUCCESS: {
      localStorage.setItem("token", action.refreshToken);
      // setCookie('token', action.accessToken);
      return {
        ...state,
        token: action.accessToken,

        answerLogin: {
          ...state.answerLogin,
          isLogin: false,
          userRequest: false,
        },
      };
    }
    case LOGIN_ISAUTH: {
      return {
        ...state,
        answerLogin: {
          ...state.answerLogin,
          isLogin: true,
        },
      };
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        answerLogin: {
          ...state.answerLogin,
          userFailed: true,
          userRequest: false,
        },
      };
    }

    //Регестрация
    case SET_USER: {
      return {
        ...state,
        answerRegister: {
          ...state.answerRegister,
          userRequest: true,
          userFailed: false,
        },
      };
    }
    case SET_USER_SUCCESS: {
      localStorage.setItem("token", action.refreshToken);
      return {
        ...state,
        token: action.accessToken,

        answerRegister: {
          ...state.answerRegister,
          isLogin: false,
          userRequest: false,
        },
      };
    }
    case USER_ISAUTH: {
      return {
        ...state,
        answerRegister: {
          ...state.answerRegister,
          isRegister: true,
        },
      };
    }

    case SET_USER_FAILED: {
      return {
        ...state,
        answerRegister: {
          ...state.answerRegister,
          userFailed: true,
          userRequest: false,
        },
      };
    }

    // Выход
    case EXIT: {
      return {
        ...state,
        answerExit: {
          ...state.answerExit,
          userRequest: true,
          userFailed: false,
        },
      };
    }
    case EXIT_SUCCESS: {
      localStorage.removeItem("token");
      return {
        ...initialState,
      };
    }
    case EXIT_FAILED: {
      return {
        ...state,
        answerExit: {
          ...state.answerExit,
          userFailed: true,
          userRequest: false,
        },
      };
    }

    // Обновление токена
    case UPDATE_TOKEN: {
      return {
        ...state,
        answerUpdate: {
          ...state.answerUpdate,
          userRequest: true,
          userFailed: false,
        },
      };
    }
    case UPDATE_TOKEN_SUCCESS: {
      localStorage.setItem("token", action.refreshToken);
      return {
        ...state,
        token: action.accessToken,

        answerUpdate: {
          ...state.answerUpdate,
          isLogin: false,
          userRequest: false,
        },
      };
    }
    case UPDATE_TOKEN_FAILED: {
      return {
        ...state,
        answerUpdate: {
          ...state.answerUpdate,
          userFailed: true,
          userRequest: false,
        },
      };
    }

    default: {
      return state;
    }
  }
};
export default userReducer;
