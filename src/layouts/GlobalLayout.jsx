import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import Footer from "../components/Footer";

const GlobalLayout = () => {
  return (
    <React.Fragment>
      <SubHeader />
      <Header />
      <hr />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

export default GlobalLayout;
