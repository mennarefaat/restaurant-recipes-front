import { ThemeProvider, createTheme } from "@mui/material/styles";
import getDesignTokens from "./components/them";
import Box from "@mui/material/Box";
import "./App.css";
import Router from "./Routes/routes";
// import EditRecipe from "./pages/EditRecipe";

const darkModeTheme = createTheme(getDesignTokens("light"));

function App() {
  return (
    <ThemeProvider theme={darkModeTheme}>
      <Box
        sx={{
          bgcolor: "background.default",
          color: "text.primary",
          minHeight: "100vh",
        }}
      >
        <Router />
        {/* <EditRecipe/> */}
      </Box>
    </ThemeProvider>
  );
}

export default App;
