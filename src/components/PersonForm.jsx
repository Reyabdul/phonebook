import React from "react";

const PersonForm = ({addNewContact, newName, newNumber, handleNameChange, handleNumberChange}) => {
console.log(newName)
  return (
    <div>
      <form onSubmit={addNewContact}>
        <div>
          name:
          <input value={newName} onChange={handleNameChange} />
        </div>
        number:
        <input value={newNumber} onChange={handleNumberChange} />
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
}

export default PersonForm;
