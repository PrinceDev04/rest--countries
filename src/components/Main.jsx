import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Countries from "./Countries";

function Main() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState();
  const [searchParam] = useState(["capital", "name"]);
  const [filterKey, setFilterKey] = useState([]);

  const handleSearch = (event) => {
    setInput(event.target.value); // Convert input to lowercase for case-insensitive comparison
  };
  const handleFilterChange = (event) => {
    const selectedRegion = event.target.value;
    setFilterKey(selectedRegion);
  };

  useEffect(() => {
    // Simulating loading state with setTimeout for 1 second
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout); // Clear timeout on unmount or re-render
  }, [input]);

  return (
    <div>
      <div className="search__container">
        <div className="input__div">
          <input
            onChange={handleSearch}
            type="text"
            placeholder="Search for a country"
            value={input}
          />
          {loading ? (
            <FontAwesomeIcon icon="fa-solid fa-spinner" />
          ) : (
            <div>
              <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            </div>
          )}
        </div>
        <select id="filter" onChange={handleFilterChange}>
          <option value="" selected>
            Filter by region
          </option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      <Countries input={input} filterKey={filterKey} />
    </div>
  );
}

export default Main;
