import { useState } from "react";
import countryService from "../services/countryService";

const FindCountry = ({findCountryName,countriesList}) => {
  //const [findCountryName, setFindCountryName] = useState();
  const [countryExistAlert, setCountryExistAlert] = useState();
  const [tooManyElementsAlert, setTooManyElementsAlert] = useState();
  //const [countriesList, setCountries] = useState([]);
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
    setNumberOfMatches([]);
    let currentCountry = findCountryName;
    let exist;
    event.preventDefault();
    for (let i = 0; i < countriesList.length; i++) {
      let resultOfMatch = regexFindLetters(currentCountry, countriesList[i].name.common);
      if(resultOfMatch!==null){
          setNumberOfMatches((numberOfMatches) => [...numberOfMatches,resultOfMatch]);
      }
    }
    if(numberOfMatches.length>10){
      console.log(numberOfMatches)
      setTooManyElementsAlert('Too many elements');
    } else if (numberOfMatches.length===1) {
      let bd=[countriesList.common,countriesList.capital,countriesList.area,countriesList.flag];
      let d=bd.toString()
      console.log(d)
    } else if (numberOfMatches.length<=10){
      let c=numberOfMatches.toString()
      console.log(c)
      setTooManyElementsAlert(c);
    }
    exist = countriesList.find((c) => c.name.common === currentCountry);
    if (!exist) {
      setCountryExistAlert(`${currentCountry} is not on the database`);
    }

  };

  return (

      <div>
        <button onClick={findCountry}>Find country</button>
        {countryExistAlert}
        <div>{tooManyElementsAlert}</div>
      </div>
  );
};

export default FindCountry;
