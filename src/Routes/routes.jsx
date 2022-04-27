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

const Router = () => {
  return (
    <>
      <BrowserRouter>
          <NavBar />
        <Routes>
          <Route path="/" />
          <Route path="/recipes"  element={<Recieps/>}/>
          <Route path="/recipes/:id" element={<RecipeDetail/>}/>
          <Route path="/recipes/edit/:id" />
          <Route path="/recipes/add" />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
