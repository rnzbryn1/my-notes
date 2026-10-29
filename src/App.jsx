import { useState } from "react";
import "./App.css";
import MainPage from "./pages/MainPage";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import ViewNotes from "./components/MainPage/ViewNotes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route path="viewnotes" element={<ViewNotes />} />
      </Route>  
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
