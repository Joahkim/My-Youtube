import React from "react";
import { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import "./searchBar.scss";

const SearchBar = ({ onSearch }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const inputValue = inputRef.current.value;
    onSearch(inputValue);
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") handleSearch();
  };
  return (
    <header className="searchHeader">
      <div className="logo">
        <img className="logoImage" src="/images/logo.png" alt="logo" />
        <h1>Youtube</h1>
      </div>
      <input
        onKeyPress={onKeyPress}
        ref={inputRef}
        className="searchInput"
        type="search"
        placeholder="search...."
      />
      <button className="searchBtn" type="submit" onClick={onClick}>
        <FaSearch />
      </button>
    </header>
  );
};

export default SearchBar;
