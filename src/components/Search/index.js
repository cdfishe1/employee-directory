import React from "react";

const Search = (props) => {
  // Setting the component's initial state

  return (
    <nav className="navbar navbar-light bg-light justify-content-center">
      <form className="form-inline m-2">
        <label for='filter' className="mr-1">Filter by Last Name</label>
        <input type='text' name='filter' className="ml-1" onChange={props.handleInputChange} value={props.search}/>
      </form>
    </nav>
  );
};

export default Search;