import Recipe from "../../apis/recipe";
import { SET_GET_RECIPES } from "./types";

export const getRecipes=() => async (dispatch) => {
  try {
    const res = await Recipe.get("/recipes");
    console.log(res);
    dispatch({
      type: SET_GET_RECIPES,
      payload: res.data,
    });
  } catch (err) {
    return console.log("dataerr", err);
  }
};
