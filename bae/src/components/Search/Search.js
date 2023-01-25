import { useState } from "react";
import data from "../../lib/data.js";

export default function Search() {
  const [search, setSearch] = useState("");
  function onChange(e) {
    const newSearchTerm = e.target.value;

    setSearch({ ...search, searchTerm: newSearchTerm });
  }

  // async function onClick() {}
  const onClick = () => {
    // Code to perform search
  const filteredData = data.filter(food => data.food.toLowerCase().includes(search.toLowerCase()));
  console.log(filteredData);
  }


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
        <button className="search-button" onClick={onClick}>
          Whats my carbon score?
        </button>
      </div>
    </>
  );
}
