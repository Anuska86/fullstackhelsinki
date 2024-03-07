import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const deleteContactOf = (id,persons,setPersons) => {
  if (window.confirm("This contact is about to be deleted")) {
    const url = `http://localhost:3001/persons/${id}`;
    const person = persons.find((p) => p.id === id);
    const deletePerson = { ...person };

    axios.delete(url, deletePerson).then((response) => {
      setPersons(
        persons.map((person) => (person.id !== id ? person : response.data))
      );
    });
  }else{
    return
  }
};



const getAll = () => {
  return axios.get(baseUrl)
}

const create = newObject => {
  return axios.post(baseUrl, newObject)
}

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject)
}

export default { 
  getAll: getAll, 
  create: create, 
  update: update,
  deleteContactOf:deleteContactOf
}

