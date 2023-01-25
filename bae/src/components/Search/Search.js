import { useState } from "react";
import data from "../../lib/data.js";
import Result from "../Result/Result.js";
export default function Search() {
  const [search, setSearch] = useState({});
  const [clicked, setClick] = useState(false)
  function onChange(e) {
    const newSearchTerm = e.target.value;

    setSearch({ ...search, searchTerm: newSearchTerm });
  }
function getData(){
    const filteredData = data.filter(food => data.food.toLowerCase().includes(search.toLowerCase()));
  setSearch(filteredData)
}
  // async function onClick() {}
  function onClick() {
    
    setClick(false | true)
  console.log(clicked)
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
       {clicked ?(<Result data={search}/>)  : (<p></p>)}
      </div>
    </>
  );
}
