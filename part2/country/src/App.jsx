/* eslint-disable no-unused-vars */
import { useState} from "react";
import "./App.css";
import FindCountry from "./components/FindCountry";
import countryService from "./services/countryService";

const App = () => {

  return (
    <div>
      <h2>Find a country: </h2>
      <FindCountry />
    </div>
  );
};

export default App;
