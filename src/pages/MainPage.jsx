import React from "react";
import Header from "../shared/components/Header";
import Footer from "../shared/components/Footer";
import "../styles/pages/MainPage.css";
import {Outlet} from "react-router-dom";

function MainPage() {
  return (
    <div className="main-page">
      <Header className="main-header" />
      <Outlet />
      <Footer className="main-footer" />
    </div>
  );
}

export default MainPage;
