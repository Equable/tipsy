import React from "react";

const SearchTile = props => {
  let searchTextChange =(event)=>{
    event.preventDefault();
    props.onChange(event.target.value)
  }

  let handleSearch =(event)=>{
    event.preventDefault()
    props.handleSearch()
  }

  let style = {
    height: '100%'
  }
  return (
      <div className="grid-y align-center" style={style}>
        <div className="search-bar">
          <form onSubmit={handleSearch}>
            <label htmlFor="search">Search:</label>
            <input name="search" type="text" value={props.searchText} onChange={searchTextChange} />
            <div className="cell text-center">
              <input className="button" type="submit" value="Search" />
            </div>
          </form>
        </div>
      </div>
  );
};

export default SearchTile;
