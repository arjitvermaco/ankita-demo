import React, { useContext } from "react";
import AppContext from "./context/AppContext/AppContext";
import Header from "./components/ecom/Header";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/ecom/HomePage";
import CategoryPage from "./pages/ecom/CategoryPage";
import ProductPage from "./pages/ecom/ProductPage";

export default function App() {

  let {appName} = useContext(AppContext)
  // console.log(data)

  return (
    <div>
      <Header/>

      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/category/:id" element={<CategoryPage/>}/>
        <Route path="/product/:id" element={<ProductPage/>}/>
      </Routes>
    </div>
  );
}
