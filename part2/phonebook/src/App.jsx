import { useState } from "react";
import Person from "./components/Person";
import AddContact from "./components/AddContact";

const App = () => {
  // eslint-disable-next-line react/prop-types
  const [persons, setPersons] = useState([
    { id: 1, name: "Courteney Cox", phoneNumber: "212-4653326" },
    { id: 2, name: "Jennifer Aniston", phoneNumber: "212-4659852" },
    { id: 3, name: "Lisa Kudrow", phoneNumber: "212-4652226" },
    { id: 4, name: "Matthew Perry", phoneNumber: "212-4743326" },
    { id: 5, name: "David Schwimmer", phoneNumber: "212-4659826" },
    { id: 6, name: "Matt LeBlanc", phoneNumber: "212-4653336" },
  ]);


  const [findName, setFindName] = useState();
  const [contactExistAlert, setcontactExistAlert] = useState();


  const findPerson = (event) => {
    event.preventDefault();
    let notExists = true; 
    for(let i=0; i< persons.length;i++){
      if(persons[i].name==findName){
        setcontactExistAlert(JSON.stringify({ name: persons[i].name, phone: persons[i].phoneNumber }));
        notExists = false;
      }
    }
    if (notExists) {
      setcontactExistAlert(`${findName} is not on the phonebook`);
    }

  };

  const handleFindNameChange = (event) => {
    setFindName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook:</h2>
 
      <form onSubmit={findPerson}>
        <div>
          Find a contact:{" "}
          <input value={findName} onChange={handleFindNameChange} />
        </div>
        <div>
          <button type="submit">Find contact</button>
          {contactExistAlert}
        </div>
      </form>

      <h2>Add a new contact:</h2>

      <AddContact persons={persons} setPersons={setPersons}/>

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
