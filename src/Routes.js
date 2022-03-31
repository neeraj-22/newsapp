import React from "react";
import { BrowserRouter, Routes as RoutesAlt, Route } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
// import App from './App';
import Homepage from "./pages/Homepage";

const Routes = () => {
  return (
    <BrowserRouter>
      <RoutesAlt>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/:category" exact element={<CategoryPage />} />
      </RoutesAlt>
    </BrowserRouter>
  );
};

export default Routes;
