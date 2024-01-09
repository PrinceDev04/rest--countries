import React, { useEffect, useState } from "react";
import { countries } from "../data";
import { Link, useParams } from "react-router-dom";

function CountryInfo() {
  const { name } = useParams();
  const [countryInfo, setCountryInfo] = useState(null);

  useEffect(() => {
    const filteredCountry = countries.find(
      (country) => country.name.toLowerCase() === name.toLowerCase()
    );
    setCountryInfo(filteredCountry);
  }, [name]);

  return (
    <section id="page">
      <div className="info__div">
        {countryInfo && (
          <div className="details">
            <Link to={"/"} >
            <button>Back To Home</button>
            </Link>
            <div className="country__img--div">
              <img
                className="country__img2"
                src={countryInfo.flags.png} // Use the flag URL from your data
                alt={`Flag of ${countryInfo.name}`}
              />
            </div>
            <div className="country__info">
              <h2>Name: {countryInfo.name}</h2>
              <h2>Capital: {countryInfo.capital}</h2>
              <h2>Region: {countryInfo.region}</h2>
              <h2>Sub-Region: {countryInfo.subregion}</h2>
              {countryInfo.currencies.map((currency) => (
                <h2>Currency: {currency.name}</h2>
              ))}
              {countryInfo.languages.map((language) => (
                <h2>Language: {language.name}</h2>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default CountryInfo;
