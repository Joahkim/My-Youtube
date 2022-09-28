import React from "react";
import { FaSearch } from "react-icons/fa";
import "./searchBar.scss";

const SearchBar = () => {
  return (
    <header className="searchHeader">
      <div className="logo">
        <img className="logoImage" src="/images/logo.png" alt="logo" />
        <h1>Youtube</h1>
      </div>
      <input className="searchInput" type="search" placeholder="search...." />
      <button className="searchBtn" type="submit">
        <FaSearch />
      </button>
    </header>
  );
};

export default SearchBar;
