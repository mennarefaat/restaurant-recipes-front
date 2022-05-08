import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { WithMaterialUI } from "../components/Form/Form";
import { addRecipe } from "../store/actions/addRecipe";

export default function AddNewRecipe() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const formateData = (values) => {
    const formData = new FormData();
    formData.append("file", values.file);
    formData.append("title", values.title);
    formData.append("ingredients", [values.ingrediants]);
    formData.append("recipe", values.recipe);
    formData.append("image", values?.file.name);
    return formData;
  };
  const AddNewRecipe = (data) => {
    dispatch(addRecipe(formateData(data))).then(()=>{navigate("/recipes")})
    console.log(data);
  };
  return (
    <Box width={"50%"} margin={"auto"} marginTop={"5%"}>
      <WithMaterialUI addRecipe={AddNewRecipe} />
    </Box>
  );
}
