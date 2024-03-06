/* eslint-disable react/prop-types */
const Person = ({ person, deleteNote }) => {

    return (
      <li>
        {person.name}: {person.phoneNumber}
        <button onClick={deleteNote}>Delete contact</button>
      </li>
    )
  
  }


export default Person;
