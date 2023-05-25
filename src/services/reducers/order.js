import {
  GET_ORDER,
  GET_ORDER_FAILED,
  GET_ORDER_SUCCESS,
} from "../actions/order";

const initialState = {
  orderRequest: true,
  orderFailed: false,
  order: [],
  name: null,
  orderNumber: null,
};
const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER: {
      return {
        ...state,
        orderRequest: true,
        orderFailed: false,
      };
    }
    case GET_ORDER_SUCCESS: {
      return {
        ...state,
        orderRequest: false,
        order: action.payload.order,
        orderNumber: action.payload.orderNumber,
        name: action.payload.name,

      };
    }
    case GET_ORDER_FAILED: {
      return {
        ...state,
        orderFailed: true,
        orderRequest: false,
      };
    }
    default: {
      return state;
    }
  }
};
export default orderReducer;