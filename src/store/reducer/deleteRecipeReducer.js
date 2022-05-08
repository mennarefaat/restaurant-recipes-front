import { SET_DELETE_RECIPE } from "../actions/types";

const INITIAL_STATE = {
    recipe:{}
  };
  
export function deleteRecipesReducer(state = INITIAL_STATE, action) {
    console.log(action.type);
    switch (action.type) {
      case SET_DELETE_RECIPE:
        return {
          ...state,
          list: action.payload,
        };
      default:
        return state;
    }
}