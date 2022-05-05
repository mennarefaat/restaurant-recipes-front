import { combineReducers } from "redux";

import { getRecipesReducer } from "./recipes";


export default combineReducers ({
    recipes:getRecipesReducer
})