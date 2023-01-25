import { useState } from 'react';

export default function Search(){
    const [search, setSearch] = useState("");
    function onChange(e) {
        const newSearchTerm = e.target.value;
        
        
        setSearch({ ...search, searchTerm: newSearchTerm });
      }
    

      async function onClick(){

      }
     
    return  <><input
    data-testid="search-input"
    type="text"
    placeholder="Search food"
    onChange={onChange}
    value={search.searchTerm}
  ></input><button className="search-button" onClick={onClick}>
  Whats my carbon score?
</button></>
}