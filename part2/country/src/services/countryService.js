import axios from "axios";

const baseURL = "http://localhost:3001/countryList";

const deleteCountryOf = (name, countryList, setCountry) => {
  if (window.confirm("This country is about to be deleted")) {
    const url = `http://localhost:3001/countryList'${name}`;
    const country = countryList.find((c) => c.name.common === name);
    const deleteCountry = { ...country };

    axios.delete(url, deleteCountry).then((response) => {
      setCountry(
        countryList.map((country) =>
          country.name.common !== name ? country : response.data
        )
      );
    });
  } else {
    return;
  }
};



const getAll = () => {
  return axios.get(baseURL);
};

const create = newObject => {
  return axios.post(baseURL, newObject)
}

const update = (name, newObject) => {
  return axios.put(`${baseURL}/${name}`, newObject)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAll: getAll,
  create: create, 
  update: update,
  deleteCountryOf: deleteCountryOf
};
