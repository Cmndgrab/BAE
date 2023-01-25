import { useState } from 'react';

export default function Search(){
    const [search, setSearch] = useState("");
    function onChange(e) {
        const newSearchTerm = e.target.value;
        
        
        setSearch({ ...search, searchTerm: newSearchTerm });
      }
    


     
    return  <input
    data-testid="search-input"
    type="text"
    placeholder="Search food"
    onChange={onChange}
    value={search.searchTerm}
  ></input>
}