import { useState } from "react";
import countryService from "../services/countryService";

const FindCountry = ({ findCountryName, countriesList }) => {
  //const [findCountryName, setFindCountryName] = useState();
  const [countryExistAlert, setCountryExistAlert] = useState();
  const [tooManyElementsAlert, setTooManyElementsAlert] = useState();
  const [countryName, setCountryName] = useState();
  const [countryCapital, setCountryCapital] = useState();
  const [countryArea, setCountryArea] = useState();
  const [flag, setFlag] = useState();
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

  const findCountry = () => {
    setNumberOfMatches([]);
    let exist;
    for (let i = 0; i < countriesList.length; i++) {
      let resultOfMatch = regexFindLetters(
        findCountryName,
        countriesList[i].name.common
      );
      if (resultOfMatch !== null) {
        setNumberOfMatches((numberOfMatches) => [
          ...numberOfMatches,
          resultOfMatch,
        ]);
      }
    }
    if (numberOfMatches.length > 10) {
      console.log(numberOfMatches);
      setTooManyElementsAlert("Too many elements");
    } else if (numberOfMatches.length === 1) {
      let selectedCountry = countriesList.find(
        (c) => c.name.common === findCountryName
      );

      try {
        let bd = {
          name: selectedCountry.name.common,
          capital: selectedCountry.capital[0],
          area: selectedCountry.area,
          flag: selectedCountry.flags.png,
        };

        setCountryName(bd.name);
        setCountryCapital(bd.capital);
        setCountryArea(bd.area);
        setFlag(bd.flag);

        let d = bd.toString();
        console.log(d);
      } catch (e) {
        console.log(e);
        alert("Register not in database!");
      }
    } else if (numberOfMatches.length <= 10) {
      let c = numberOfMatches.toString();
      console.log(c);
      setTooManyElementsAlert(c);
    }
    exist = countriesList.find((c) => c.name.common === findCountryName);
    if (!exist) {
      setCountryExistAlert(`${findCountryName} is not on the database`);
    }
  };

  return (
    <div>
      <button onClick={findCountry}>Find country</button>
      {countryExistAlert}
      <div>{tooManyElementsAlert}</div>
      {countryName && (
        <div>
          <div>
            <li>{countryName}</li>
            <li>{countryCapital}</li>
            <li>{countryArea}</li>
          </div>
          <img src={flag} alt="" />
        </div>
      )}
    </div>
  );
};

export default FindCountry;
