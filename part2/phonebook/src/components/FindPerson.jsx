/* eslint-disable react/prop-types */
import { useState } from "react";

const FindPerson = (props) => {
  const [findName, setFindName] = useState();
  const [contactExistAlert, setcontactExistAlert] = useState();

  const findPerson = (event) => {
    event.preventDefault();
    let notExists = true;
    for (let i = 0; i < props.personsList.length; i++) {
      if (props.personsList[i].name == findName) {
        setcontactExistAlert(
          JSON.stringify({
            name: props.personsList[i].name,
            phone: props.personsList[i].phoneNumber,
          })
        );
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
  );
};

export default FindPerson;
