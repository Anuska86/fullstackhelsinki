import axios from 'axios'
const baseUrl = 'http://localhost:3001/personsList'

const deleteContactOf = (id,personsList,setPersons) => {
  if (window.confirm("This contact is about to be deleted")) {
    const url = `http://localhost:3001/personsList/${id}`;
    const person = personsList.find((p) => p.id === id);
    const deletePerson = { ...person };

    axios.delete(url, deletePerson).then((response) => {
      setPersons(
        personsList.map((person) => (person.id !== id ? person : response.data))
      );
    });
  }else{
    return
  }
};

const changeNumberOf=(id,personsList,setPersons,newPhone)=>{
  if (window.confirm("This contact is already on the phonebook.Would you like to change the phone number with this new one?")){
    const url=`http://localhost:3001/personsList/${id}`;
    const person = personsList.find((p) => p.id === id);
    person.phoneNumber = newPhone;
    const changeNumber={...person};

    axios.put(url,changeNumber).then((response)=>{
      setPersons(
        personsList.map((person) => (person.id !== id ? person : response.data))
      )
    })
  }else{
    return
  }
}



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
  deleteContactOf:deleteContactOf,
  changeNumberOf:changeNumberOf
}

