import { useState } from "react";
import countryService from "../services/countryService";

const FindCountry = (props) => {
  const [findCountryName, setFindCountryName] = useState();
  const [countryExistAlert, setCountryExistAlert] = useState();
  const [tooManyElementsAlert, setTooManyElementsAlert] = useState();
  const [countriesList, setCountries] = useState([]);
  const [numberOfMatches, setNumberOfMatches] = useState([]);

  const regexFindLetters = (pattern, value) => {
    var letter = new RegExp("^" + pattern, "g");
    let result = value.match(letter);
    if (result !== null) {
      console.log(result);
      console.log(value);
      return value;
    }
    return null;
  };

  const findCountry = (event) => {
    let currentCountry = event.target[0].value;
    let exist;
    event.preventDefault();
    countryService.getAll().then((response) => {
      setCountries([])
      setCountries((countriesList) => [...countriesList, ...response.data]);
      console.log(countriesList);
      for (let i = 0; i < countriesList.length; i++) {
        let resultOfMatch = regexFindLetters(currentCountry, countriesList[i].name.common);
        if(resultOfMatch!==null){
            setNumberOfMatches((numberOfMatches) => [...numberOfMatches,resultOfMatch]);
        }
      }
      if(numberOfMatches.length>10){
        console.log(numberOfMatches)
        setTooManyElementsAlert('Too many elements');
      } else if (numberOfMatches.length<=10){
        setTooManyElementsAlert(numberOfMatches)
      }

      exist = countriesList.find((c) => c.name.common === currentCountry);
      if (!exist) {
        setCountryExistAlert(`${currentCountry} is not on the database`);
      }
    });
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
      {tooManyElementsAlert}
    </form>
  );
};

export default FindCountry;
