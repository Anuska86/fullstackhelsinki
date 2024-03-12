import { useState } from "react";
import countryService from "../services/countryService";

const FindCountry = (props) => {
  const [findCountryName, setFindCountryName] = useState();
  const [countryExistAlert, setCountryExistAlert] = useState();
  const [countriesList, setCountries] = useState([]);

  const regexFindLetters = (pattern, value) => {
    var re = new RegExp('^'+pattern, 'g');
    let result = value.match(re);
    if(result!==null){
        console.log(result);
        console.log(value);
    }
  };

  const findCountry = (event) => {
    let currentCountry = event.target[0].value;
    let exist;
    event.preventDefault();
    countryService.getAll().then((response) => {
      setCountries((countriesList) => [...countriesList, ...response.data]);
      console.log(countriesList);
      for(let i = 0;i< countriesList.length;i++){
        regexFindLetters(currentCountry,countriesList[i].name.common);
      }
      //exist = countriesList.find((c) => c.name.common === currentCountry);
    });

    if (!exist) {
      setCountryExistAlert(`${currentCountry} is not on the database`);
    } else {
      setCountryExistAlert(`Already ${currentCountry} on the database`);
    }
  };

  const handleFindCountryChange = (event) => {
    setFindCountryName(event.target.value);
  };

  return (
    <form onSubmit={findCountry}>
      <div>
        Find a country:{" "}
        <input value={findCountryName} onChange={handleFindCountryChange} />
      </div>
      <div>
        <button type="submit">Find country</button>
        {countryExistAlert}
      </div>
    </form>
  );
};

export default FindCountry;
