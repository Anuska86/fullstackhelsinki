import { useState, useEffect } from "react";
import Person from "./components/Person";
import AddContact from "./components/AddContact";
import FindPerson from "./components/FindPerson";
import axios from "axios";

const App = () => {
  // eslint-disable-next-line react/prop-types
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Phonebook:</h2>

      <FindPerson persons={persons} />

      <h2>Add a new contact:</h2>

      <AddContact persons={persons} setPersons={setPersons} />

      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <Person
            key={person.id}
            person={person}
            phoneNumber={person.phoneNumber}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
