import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import Dashboard from "./pages/dashboard";
import AllRecipes from "./pages/all-recipes";
import CreateNewRecipe from "./pages/create-new-recipe";
import ViewRecipe from "./pages/view-recipe";
import UserProfilePage from "./pages/user-profile-page";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/recipes" element={<AllRecipes />} />
        <Route path="/recipes/new" element={<CreateNewRecipe />} />
        <Route path="/recipes/view" element={<ViewRecipe />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
