import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";
import { deleteRecipe } from "../../store/actions/deleteRecipe";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { getRecipes } from "../../store/actions/recipes";


export default function SmallCard({ title, image,_id }) {
  const navigate  =useNavigate()
  const dispatch = useDispatch();

  const deleteOneRecipe = (id) => {
    console.log(id)
    dispatch(deleteRecipe(id)).then(()=>{dispatch(getRecipes())})
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <Link to={`/recipes/${_id}`}>
          <CardMedia
            component="img"
            height="140"
            image= { `http://localhost:8080/${image}`}
            alt="green iguana"
          />
        </Link>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={(()=>{deleteOneRecipe(_id)})}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
