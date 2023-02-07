import { useState } from "react";

const Search = ({searchValue,onSearch }) => {
  


    return(
<section>
    <div>
        <label>Search</label>
        <input type="text" value={searchValue} onChange={onSearch}></input>
    </div>
   
</section>
    );
};
export default Search;
