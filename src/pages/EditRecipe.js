import { Box } from "@mui/system";
import { EditForm } from "../components/EditForm/EditForm";

export default function EditRecipe() {
  const ingrediants = ["rice", "wated", "salts"];
  return (
    <Box width={"50%"} margin={"auto"} marginTop={"5%"}>
      <EditForm ingrediants={ingrediants} />
    </Box>
  );
}
