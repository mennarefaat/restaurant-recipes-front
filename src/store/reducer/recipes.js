import { SET_GET_RECIPES } from "../actions/types";

const INITIAL_STATE = {
  list: [],
};

export function getRecipesReducer(state = INITIAL_STATE, action) {
    console.log(action.type)
  switch (action.type) {
    case SET_GET_RECIPES:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
}
