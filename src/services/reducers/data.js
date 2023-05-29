import {
  GET_DATA,
  GET_DATA_FAILED,
  GET_DATA_SUCCESS,
  ADD_COUNT,
  UPDATE_BUN,
  REMOVE_COUNT,
  INITIAL,
} from "../actions/data";
const initialState = {
  dataRequest: true,
  dataFailed: false,
  data: [],
};
const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA: {
      return {
        ...state,
        dataRequest: true,
        dataFailed: false,
      };
    }
    case GET_DATA_SUCCESS: {
      return {
        ...state,
        data: action.data.map((item) => ({
          ingredient: item,
          count: 0,
        })),
        dataRequest: false,
      };
    }
    case INITIAL: {
      return {
        ...state,
        data: state.data.map((item) => ({
          ingredient: item.ingredient,
          count: 0,
        })),
      };
    }
    case GET_DATA_FAILED: {
      return {
        ...state,
        dataFailed: true,
        dataRequest: false,
      };
    }
    case ADD_COUNT: {
      return {
        ...state,
        data: state.data.map((item) =>
          item.ingredient._id === action.payload._id
            ? { ...item, count: item.count + 1 }
            : item
        ),
      };
    }
    case UPDATE_BUN: {
      return {
        ...state,
        data: state.data.map((item) =>
          item.ingredient.type === "bun"
            ? item.ingredient._id === action.payload._id
              ? { ...item, count: 1 }
              : { ...item, count: 0 }
            : item
        ),
      };
    }
    case REMOVE_COUNT: {
      return {
        ...state,
        data: state.data.map((item) =>
          item.ingredient._id === action.payload.structure._id
            ? { ...item, count: item.count - 1 }
            : item
        ),
      };
    }
    default: {
      return state;
    }
  }
};

export default dataReducer;
