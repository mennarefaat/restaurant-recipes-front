import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function DetailedCard({ recipe, deleteRecipe }) {

  return (
    <Card sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="/static/images/cards/live-from-space.jpg"
        alt={recipe.title}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h4">
            {recipe?.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            <ul>
              {recipe?.ingredients?.map((ingred, index) => {
                return <li key={index}>{ingred}</li>;
              })}
            </ul>
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <Typography component="div" variant="h7">
            {recipe?.recipe}
          </Typography>
        </Box>
        <Typography style={{ display: "block" }}>
          <Link
            to={`/recipes/edit/${recipe._id}`}
            style={{ textDecoration: "none" }}
          >
            <Button>Edit</Button>
          </Link>
          <Button
            onClick={(()=>{deleteRecipe(recipe._id)})}
          >
            Delete
          </Button>
        </Typography>
      </Box>
    </Card>
  );
}
