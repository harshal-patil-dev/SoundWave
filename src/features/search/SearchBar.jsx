import { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  function handleChange(event) {
    const value = event.target.value;
    setQuery(value);
    onSearch?.(value);
  }

  function handleClear() {
    setQuery("");
    onSearch?.("");
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search songs, artists, albums..."
        value={query}
        onChange={handleChange}
      />

      {query && (
        <button type="button" onClick={handleClear}>
          Clear
        </button>
      )}
    </div>
  );
}

export default SearchBar;