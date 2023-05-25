import { ADD_ITEM, REMOVE_ITEM, ADD_BUN, SORT, CLEAR } from "../actions/burger";

const initialState = {
  bread: null,
  topping: [],
  flag: false,
  price: 0,
};
const burgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SORT: {
      const index = state.topping.indexOf(action.burger);
      const newItem = state.topping.filter(
        (value) => value.uuid !== action.burger.uuid
      );
      newItem.splice(index + Math.trunc(action.y / 80), 0, action.burger);
      return {
        ...state,
        topping: newItem,
      };
    }
    case CLEAR: {
      return initialState;
    }
    case ADD_ITEM: {
      return {
        ...state,
        flag: true,
        topping: [
          ...state.topping,
          {
            uuid: action.payload.uuid,
            structure: action.payload.item,
          },
        ],
        price: state.price + action.payload.item.price,
      };
    }
    case ADD_BUN: {
      return {
        ...state,
        flag: true,
        bread: action.payload.item,
        price:
          state.bread === null
            ? state.price + action.payload.item.price * 2
            : state.price +
              action.payload.item.price * 2 -
              state.bread.price * 2,
      };
    }

    case REMOVE_ITEM: {
      let flagDo = true;

      const newItem = state.topping.filter(
        (value) => value.uuid !== action.payload.uuid
      );

      if (state.bread === null && newItem.length === 0) {
        flagDo = false;
      }

      return {
        ...state,
        flag: flagDo,
        topping: newItem,
        price: state.price - action.payload.structure.price,
      };
    }

    default: {
      return state;
    }
  }
};
export default burgerReducer;
