import React from "react";
import { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
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

  const backHome = () => {
    window.location.href = "/";
  };

  return (
    <header className="searchHeader">
      <div className="logo" onClick={backHome}>
        <IoLogoYoutube className="logoImage" />
        <h1>Mytube</h1>
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
