import { useState, useEffect } from "react";
import './countries.css';

function CountriesCard() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://xcountries-backend.azurewebsites.net/all")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response failed");
        }
        return response.json();
      })
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      });
  }, []);

  return (
    <div className="flexbox">
      {countries.map((country) => (
        <div key={country.name} className="countryCard">
          <img
            src={country.flag}
            alt={`Flag of ${country.name}`}
            className="image"
          />
          <p className="countryName">{country.name}</p>
        </div>
      ))}
    </div>
  );
}

export default CountriesCard;
