import React from "react";

const SearchBar = ({ onSearch }) => {
  return (
    <div>
      <input
        type="search"
        placeholder="Search by product name"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
