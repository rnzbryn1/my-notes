import React from "react";
import { Link } from "react-router-dom";
import "../../styles/shared/components/Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>My Notes</h1>
      <nav className="header-nav">
        <ul>
          <li><Link to="/viewnotes">Home</Link></li>
          <li><Link to="/pinned">Pinned</Link></li>
          <li><Link to="/archived">Archived</Link></li>
          <li><Link to="/trash">Trash</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;