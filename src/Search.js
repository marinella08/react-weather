import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="form">
      <nav className="navbar">
        <form>
          <input
            className="search-city"
            type="search"
            placeholder="Search"
            autocomplete="off"
          />
          <input className="search-btn" type="submit" value="🔍" />
        </form>
      </nav>
    </div>
  );
}
