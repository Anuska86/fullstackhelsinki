import axios from "axios";

const baseURL = "http://localhost:3001/countryList";

const getAll = () => {
  return axios.get(baseURL);
};

const create = (newObject) => {
  return axios.post(baseURL, newObject);
};

const update = (name, newObject) => {
  return axios.put(`${baseURL}/${name}`, newObject);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAll: getAll,
  create: create,
  update: update,
};
