import React from "react";

//Render the search function passing props from Table.js
const Search = (props) => {
  
  return (
    <nav className="navbar navbar-light bg-light justify-content-center">
      <form className="form-inline m-2">
        <label htmlFor='filter' className="mr-1">Filter by Last Name</label>
        <input type='text' name='filter' className="ml-1" onChange={props.handleInputChange} value={props.search}/>
      </form>
    </nav>
  );
};

export default Search;