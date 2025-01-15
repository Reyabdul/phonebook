import React from "react";

const Persons = ({person, handleDelete}) => {

  console.log(person)
  return (
    <div>
      <li>
        {person.name} {person.number}&nbsp;
        <button onClick={handleDelete}>delete</button>
      </li>
    </div>
  );
};

export default Persons;
