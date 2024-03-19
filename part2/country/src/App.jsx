/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./App.css";
import FindCountry from "./components/FindCountry";
import countryService from "./services/countryService";
import { API_KEY } from './config';

const App = () => {
  const [countriesList, setCountries] = useState([]);
  const [findCountryName, setFindCountryName] = useState();
  console.log(API_KEY);

  useEffect(() => {
    countryService.getAll().then((response) => {
      console.log(response.data)
      setCountries(response.data);
    });
  }, []);

  const handleFindCountryChange = (event) => {
    setFindCountryName(event.target.value);
  };

  return (
    <div>
      <div>
        Find a country:{" "}
        <input value={findCountryName} onChange={handleFindCountryChange} />
      </div>
      <div>
        <FindCountry
          findCountryName={findCountryName}
          countriesList={countriesList}
        />
      </div>
    </div>
  );
};

export default App;
