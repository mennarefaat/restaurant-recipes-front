import { SET_GET_RECIPES } from "../actions/types";
import { SET_GET_RECIPE } from "../actions/types";

const INITIAL_STATE = {
  list: [],
  recipe:{}
};

export function getRecipesReducer(state = INITIAL_STATE, action) {
  console.log(action.type);
  switch (action.type) {
    case SET_GET_RECIPES:
      return {
        ...state,
        list: action.payload,
      };
    case SET_GET_RECIPE:
      return {
        ...state,
        recipe: action.payload,
      };
    default:
      return state;
  }
}
