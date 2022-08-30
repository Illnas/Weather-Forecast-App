import React from "react";

const Search = ({ setSearch, setError }) => {


  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (event.target.value === "") {
        setError(true);
      }
      if (event.target.value !== "") {
        setSearch(event.target.value);
        event.target.value = "";
      }
    }
  };


  const handleClick = (event) => {
    event.preventDefault();
    if (event.target.value === "") {
      setError(true);
    }
    if (event.target.value !== "") {
      setSearch(event.target.firstChild.value);
      event.target.firstChild.value = ""
    }
  };

  return (
    <form className="search-container" onSubmit={handleClick}>
      <input type="text" onKeyDown={handleKeyDown} />
      <button type="submit" className="submit">
        <svg
          fill="#000000"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
          width="30px"
          height="30px"
        >
          <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z" />
        </svg>
      </button>
    </form>
  );
};

export default Search;
