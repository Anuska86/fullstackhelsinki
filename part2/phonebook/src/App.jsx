import { useState, useEffect } from "react";
import Person from "./components/Person";
import AddContact from "./components/AddContact";
import FindPerson from "./components/FindPerson";
import personService from "./services/personService";


const App = () => {
  // eslint-disable-next-line react/prop-types
  const [persons, setPersons] = useState([]);

 

  useEffect(() => {
    personService.getAll().then((response) => {
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
            persons={persons}
            setPersons={setPersons}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
