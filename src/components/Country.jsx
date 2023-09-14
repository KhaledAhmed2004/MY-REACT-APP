import PropTypes from "prop-types";
import "./country.css";
import { useState } from "react";

const Country = ({ country, markedCountry }) => {
  const [visited, setVisited] = useState(false);
  const visitedBtn = () => {
    setVisited(!visited);
  };
  const { name, coatOfArms } = country;
  return (
    <div className="country-container">
      <h1>Name:{name.common}</h1>
      <img className="img" src={coatOfArms.png} alt="" />
      <button onClick={() => markedCountry(country)} className="btn">
        Make as visited
      </button>
      <button onClick={visitedBtn} className="btn">
        {visited ? "done" : "going"}
      </button>
      {visited ? "i visited this country" : "i want to go"}
    </div>
  );
};
Country.propTypes = {
  country: PropTypes.object,
};
export default Country;
