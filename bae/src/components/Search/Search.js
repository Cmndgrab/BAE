import { useState } from "react";

export default function Search() {
  const [search, setSearch] = useState("");
  function onChange(e) {
    const newSearchTerm = e.target.value;

    setSearch({ ...search, searchTerm: newSearchTerm });
  }

  async function onClick() {}

  return (
    <>
      <div className="search-component">
        <input
          data-testid="search-input"
          type="text"
          placeholder="Search food"
          onChange={onChange}
          value={search.searchTerm}
        ></input>
        <button className="search-button" role="button" onClick={onClick}>
          Whats my carbon score?
        </button>
      </div>
    </>
  );
}
