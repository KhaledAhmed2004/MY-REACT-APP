import { useEffect } from "react";
import { useState } from "react";
import Country from "./country";
import "./countries.css";
const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountry, setVisitedCountry] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  const markedCountry = (country) => {
    console.log("added");
    const newVisitedCountry = [...visitedCountry, country];
    setVisitedCountry(newVisitedCountry);
  };
  return (
    <div>
      <h1>Countries:{countries.length}</h1>
      <div>
        <h3>Visited Country:{visitedCountry.length}</h3>
        <ul>
          {visitedCountry.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      </div>
      <div className="countries-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            country={country}
            markedCountry={markedCountry}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
