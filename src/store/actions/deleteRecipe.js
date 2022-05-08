import { SET_DELETE_RECIPE } from "./types";
import Recipe from "../../apis/recipe";

export const deleteRecipe = (id) => async (dispatch) => {
  try {
    const res = await Recipe.delete(`/recipes/${id}`);
    console.log(res);
    dispatch({
      type: SET_DELETE_RECIPE,
      payload: res.data,
    });
  } catch (err) {
    return console.log("dataerr", err);
  }
};
