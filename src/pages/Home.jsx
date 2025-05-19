import React from "react";
import ProductCategories from "../components/ProductCategories";
import Features from "../components/Features";
import Products from "../components/Products";

const Home = () => {
  return (
    <React.Fragment>
      <ProductCategories />
      <Products />
      <Features />
    </React.Fragment>
  );
};

export default Home;
