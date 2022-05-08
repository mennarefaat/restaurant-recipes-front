import { SET_GET_RECIPE } from "./types";
import Recipe from "../../apis/recipe";

export const getRecipe = (id) => async (dispatch) => {
  try {
    const res = await Recipe.get(`/recipes/${id}`);
    console.log(res);
    dispatch({
      type: SET_GET_RECIPE,
      payload: res.data,
    });
  } catch (err) {
    return console.log("dataerr", err);
  }
};
