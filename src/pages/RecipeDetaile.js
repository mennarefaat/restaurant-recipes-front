import { Box, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import DetailedCard from "../components/CardDetail/CardDetail";
import { deleteRecipe } from "../store/actions/deleteRecipe";
import { getRecipe } from "../store/actions/recipe";

export default function RecipeDetail() {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const id = params.id;
  const recipe = useSelector((state) => state.recipes.recipe);

  const deleteOneRecipe = (id) => {
    console.log(id);
    dispatch(deleteRecipe(id)).then(() => {
      navigate("/recipes");
    });
  };

  useEffect(() => {
    dispatch(getRecipe(id));
  }, []);

  return (
    <>
      {!recipe.title ? (
        <Box style={{ position: "absolute", right: "50vw", top: "25vh" }}>
          <CircularProgress />
        </Box>
      ) : (
        <DetailedCard recipe={recipe} deleteRecipe={deleteOneRecipe} />
      )}
    </>
  );
}
