
import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;

    setSearchText(value);

    if (onSearch) {
      onSearch(value);
    }
  };

  const handleClearSearch = () => {
    setSearchText("");

    if (onSearch) {
      onSearch("");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex items-center gap-2 px-4 py-3 bg-white border border-gray-300 rounded-xl shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
        {/* Search Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-500"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>

        {/* Search Input */}
        <input
          type="text"
          value={searchText}
          onChange={handleInputChange}
          placeholder="Search notes..."
          aria-label="Search notes"
          className="flex-1 outline-none text-gray-700 placeholder-gray-400"
        />

        {/* Clear Button */}
        {searchText.length > 0 && (
          <button
            type="button"
            onClick={handleClearSearch}
            aria-label="Clear search"
            className="px-2 py-1 text-gray-500 hover:text-red-500"
          >
            ✕
          </button>
        )}
      </div>

      {/* Search Status */}
      <p className="mt-2 text-sm text-gray-500">
        {searchText
          ? `Searching for: ${searchText}`
          : "Type something to search your notes"}
      </p>
    </div>
  );
};

export default SearchBar;