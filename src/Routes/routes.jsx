import {
  Routes,
  Route,
  Navigate,
  Outlet,
  BrowserRouter,
} from "react-router-dom";

import NavBar from "../components/navbar/Navbar";
import Recieps from "../pages/Recipes"
import RecipeDetail from "../pages/RecipeDetaile"
import AddNewRecipe from "../pages/AddRecipe";
import EditRecipe from "../pages/EditRecipe";

const Router = () => {
  return (
    <>
      <BrowserRouter>
          <NavBar />
        <Routes>
          <Route path="/" />
          <Route path="/recipes"  element={<Recieps/>}/>
          <Route path="/recipes/:id" element={<RecipeDetail/>}/>
          <Route path="/recipes/edit/:id" element={<EditRecipe/>}/>
          <Route path="/recipes/add" element={<AddNewRecipe/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
