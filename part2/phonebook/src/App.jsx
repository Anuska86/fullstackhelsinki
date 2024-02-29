import { useState } from "react";
import Person from "./components/Person";

const App = (props) => {
  const [persons, setPersons] = useState(props.persons);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState();

  const addPerson = (event) => {
    event.preventDefault();
    let valueAlreadyExists = persons.find((x) => x.name == newName);
    let numberAlreadyExists =persons.find((x)=>x.phoneNumber==newPhone);
    if (valueAlreadyExists) {
      alert(`${newName} already exists!`);
      return;
    } else if (numberAlreadyExists){
      alert(`${newPhone} already exists!`)
    }
    else {
      const personObject = {
        name: newName,
        phoneNumber:newPhone,
        id: persons.length + 1,
      };
      setPersons(persons.concat(personObject));
      setNewName("");
    }
  };

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewPhone(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>

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
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <Person key={person.id} person={person} phoneNumber={person.phoneNumber} />
        ))}
      </ul>
    </div>
  );
};

export default App;
