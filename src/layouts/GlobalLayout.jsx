import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";

const GlobalLayout = () => {
  return (
    <React.Fragment>
      <SubHeader />
      <Header />
      <hr />
      <Outlet />
    </React.Fragment>
  );
};

export default GlobalLayout;
