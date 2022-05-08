import Recipe from "../../apis/recipe";
import { SET_ADD_RECIPE } from "./types";

export const addRecipe = (recipe) => async (dispatch) => {
  try {
    const res = await Recipe.post(`/recipes`, recipe, {
      headers: {
        "Content-Type": `multipart/form-data; boundary=${recipe._boundary}`,
      },
    });
    console.log(res);
    dispatch({
      type: SET_ADD_RECIPE,
      payload: recipe,
    });
  } catch (err) {
    return console.log("dataerr", err);
  }
};
