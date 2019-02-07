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
    <div className="search-tile">
      <div className="grid-y align-center" style={style}>
        <form onSubmit={handleSearch}>
          <label>
            Search:
        <input type="text" value={props.searchText} onChange={searchTextChange} />
          </label>
        </form>
      </div>
    </div>
  );
};

export default SearchTile;
