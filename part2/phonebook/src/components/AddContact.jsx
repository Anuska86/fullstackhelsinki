/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";

const AddContact = (props) => {
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState();

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewPhone(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();
    let valueAlreadyExists = props.persons.find((x) => x.name == newName);
    let numberAlreadyExists = props.persons.find(
      (x) => x.phoneNumber == newPhone
    );
    if (valueAlreadyExists) {
      alert(`${newName} already exists!`);
      return;
    } else if (numberAlreadyExists) {
      alert(`${newPhone} already exists!`);
    } else {
      const personObject = {
        name: newName,
        phoneNumber: newPhone,
        id: props.persons.length + 1,
      };
      axios.post('http://localhost:3001/persons', personObject)
      .then(response => {
        console.log(response)
      })
      axios.get("http://localhost:3001/persons").then((response) => {
        props.setPersons(response.data);
      });
    }
  };

  return (
    <div>
      <form onSubmit={addPerson}>
        <div>
          Name and surname:{" "}
          <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          Phone number: <input value={newPhone} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">Add person</button>
        </div>
      </form>
    </div>
  );
};

export default AddContact;
