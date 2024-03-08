/* eslint-disable react/prop-types */
import { useState } from "react";
import personService from "../services/personService";
import Notification from "../components/Notification";

const AddContact = (props) => {
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState();
  const [addedContactMessage, setAddedContactMessage] = useState();

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewPhone(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();
    let valueAlreadyExists = props.personsList.find((x) => x.name == newName);
    let numberAlreadyExists = props.personsList.find(
      (x) => x.phoneNumber == newPhone
    );
    if (valueAlreadyExists || numberAlreadyExists) {
      if (numberAlreadyExists) {
        alert(`${newPhone} already exists!`);
        return;
      } else {
        personService.changeNumberOf(
          valueAlreadyExists.id,
          props.personsList,
          props.setPersons,
          newPhone
        );
        return;
      }
    } else {
      const personObject = {
        name: newName,
        phoneNumber: newPhone,
        id: props.personsList.length + 1,
      };
      personService.create(personObject).then((response) => {
        console.log(response);
      });
      props.setPersons([...props.personsList, personObject]);
      setAddedContactMessage(`Contact '${newName}' has been added`);
      setTimeout(() => {
        setAddedContactMessage("");
      }, 3000);
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
          <Notification message={addedContactMessage} />
        </div>
      </form>
    </div>
  );
};

export default AddContact;
