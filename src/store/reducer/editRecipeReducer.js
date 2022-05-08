import { SET_ADD_RECIPE } from "../actions/types";

const INITIAL_STATE = {
    recipe:{}
  };
  
export function editRecipesReducer(state = INITIAL_STATE, action) {
    console.log(action.type);
    switch (action.type) {
      case SET_ADD_RECIPE:
        return {
          ...state,
          list: action.payload,
        };
      default:
        return state;
    }
  }