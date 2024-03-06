/* eslint-disable react/prop-types */
const Person = ({ person }) => {
  try {
    return (
      <li>
        {person.name}: {person.phoneNumber}
      </li>
    );
  } catch (err) {
    console.log(err);
  }
};

export default Person;
