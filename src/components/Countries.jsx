import React, { useEffect, useState } from "react";
import { countries } from "../data";
import { Link } from "react-router-dom";
function Countries({ input, filterKey }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(countries);
  }, []);

  // // Filter countries based on the search term
  // const filteredItems = items.filter((item) =>
  //   item.name.toLowerCase().includes(input)
  // );

  // const filteredCountries =
  //   filterKey && filterKey != ""
  //     ? items.filter((item) => item.region === filterKey)
  //     : items;
  // Filter countries based on the search term and region

  const filteredItems = items.filter((item) => {
    const nameMatchesInput = item.name
      .toLowerCase()
      .includes(input.toLowerCase());

    const regionMatchesFilter =
      filterKey && filterKey != ""
        ? filterKey === "" ||
          item.region.toLowerCase() === filterKey.toLowerCase()
        : items;
    return nameMatchesInput && regionMatchesFilter;
  });

  return (
    <div className="container">
      <div className="row">
        {filteredItems &&
          filteredItems.map((item) => (
            <div className="country__container">
              <div className="img__div">
                <Link to={`/items/${item.name}`}>
                <img className="country__img" src={item.flags.png} alt="" />
                </Link>
              </div>

              <div className="countries__details">
                <h2 className="country__name">{item.name}</h2>
                <p className="country__para">Population: {item.population}</p>
                <p className="country__para">Region: {item.region}</p>
                <p className="country__para">Capital: {item.capital}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Countries;
