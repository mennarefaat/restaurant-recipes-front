import SmallCard from "../components/Card/Card";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRecipes } from "../store/actions/recipes";
import { Box, CircularProgress } from "@mui/material";

export default function Recieps() {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes.list);
  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  return (
    <>
      {!recipes.length ? (
        <Box style={{ position: "absolute", right: "50vw", top: "25vh" }}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid
          display="grid"
          gridTemplateColumns="repeat(4, 1fr)"
          gap={2}
          margin="30px"
        >
          {console.log(recipes)}
          {recipes?.map((recipe) => {
            return (
              <SmallCard
                title={recipe.title}
                image={recipe.image}
                _id={recipe._id}
              />
            );
          })}
        </Grid>
      )}
    </>
  );
}

// {!recipes.length?(

// )}
