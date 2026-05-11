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
import { ProtectedRoute } from "./pages/routing-helpers";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <UserProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/recipes"
          element={
            <ProtectedRoute>
              <AllRecipes />
            </ProtectedRoute>
          }
        />
        <Route
          path="/recipes/new"
          element={
            <ProtectedRoute>
              <CreateNewRecipe />
            </ProtectedRoute>
          }
        />
        <Route
          path="/recipes/view"
          element={
            <ProtectedRoute>
              <ViewRecipe />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
