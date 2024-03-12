import { useState, useEffect } from "react";
import "./App.css";
import FindCountry from "./components/FindCountry";
import countryService from "./services/countryService";

const App = () => {
  const [countryList, setCountry] = useState([]);

  /*
  useEffect(() => {
    countryService.getAll().then((response) => {
      console.log(response.data);
      setCountry(response.data);
    });
  }, []);
*/

  return (
    <div>
      <h2>Find a country: </h2>
      <FindCountry countryList={countryList} />
    </div>
  );
};

export default App;
