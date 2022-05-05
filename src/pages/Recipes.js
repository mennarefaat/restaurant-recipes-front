import SmallCard from "../components/Card/Card";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRecipes } from "../store/actions/recipes";

export default function Recieps() {
  const dispatch = useDispatch();
  const recieps = useSelector((state) => console.log(state));
  useEffect(() => {
    dispatch(getRecipes());
    console.log("oook")
  },[]);

  return (
    <Grid margin={"70px"}>
      {recieps?.map((recipe) => {
        return <SmallCard />;
      })}
    </Grid>
  );
}
