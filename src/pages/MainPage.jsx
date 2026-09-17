import React from "react";
import Header from "../shared/components/Header";
import Footer from "../shared/components/Footer";
import ViewNotes from "../components/MainPage/ViewNotes";

const MainPage = () => {
  return (
    <div>
      <ViewNotes className="main-view-notes" />
      <Header className="main-header" />
      <Footer className="main-footer" />
    </div>
  );
};

export default MainPage;
