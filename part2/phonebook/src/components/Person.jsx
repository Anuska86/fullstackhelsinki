/* eslint-disable react/prop-types */
import personService from "../services/personService";
const Person = ({ person,persons,setPersons }) => {
    return (
      <li>
        {person.name}: {person.phoneNumber}
        <button onClick={() => personService.deleteContactOf(person.id,persons,setPersons)}> Delete contact </button>
      </li>
    )
  
  }


export default Person;
