import { Box } from "@mui/system";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router";
import { EditForm } from "../components/EditForm/EditForm";
import { editRecipe } from "../store/actions/editRecipe";
import { getRecipe } from "../store/actions/recipe";

export default function EditRecipe() {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate()
  const id = params.id;
  const recipe = useSelector((state) => state.recipes.recipe);

  useEffect(() => {
    dispatch(getRecipe(id));
  }, []);
 
  const formateData = (values) => {
    const formData = new FormData();
    formData.append("file", values.file);
    formData.append("_id", id);
    formData.append("title", values.title);
    formData.append("ingredients", [values.ingrediants]);
    formData.append("recipe", values.recipe);
    formData.append("image", values?.file.name);
    return formData;
  };
  const editNewRecipe = (data) => {
    dispatch(editRecipe(formateData(data))).then(()=>{navigate(`/recipes/${id}`)})
    console.log(data);
  };
  return (
    <Box width={"50%"} margin={"auto"} marginTop={"5%"}>
      <EditForm ingrediants={recipe.ingredients} image={recipe.image} title={recipe.title} recipe={recipe.recipe} editRecipeHandle={editNewRecipe}/>
    </Box>
  );
}
