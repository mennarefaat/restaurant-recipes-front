import Recipe from "../../apis/recipe";
import { SET_EDIT_RECIPE } from "./types";

export const editRecipe = (recipe) => async (dispatch) => {
  try {
    const res = await Recipe.put(`/recipes/${recipe.get("_id")}`, recipe, {
      headers: {
        "Content-Type": `multipart/form-data; boundary=${recipe._boundary}`,
      },
    });
    console.log(res);
    dispatch({
      type: SET_EDIT_RECIPE,
      payload: recipe,
    });
  } catch (err) {
    return console.log("dataerr", err);
  }
};