import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: "Artos Hellas",
      id: "1",
    },
  ]);

  // console.log(persons)

  const [newName, setNewName] = useState("");

  const addName = (event) => {
    event.preventDefault();
    // console.log("button clicked", event.target)

    const newContact = {
      name: newName,
      id: String(persons.length + 1),
    };

    const existingNames = persons.map((person) => {
      return person.name;
    });

    if (existingNames.includes(newContact.name)) {
      alert(`${newName} already exists`);
      return false;
    }

    setPersons(persons.concat(newContact));
    setNewName("");
  };

  // console.log(persons)

  const handleNameChange = (event) => {
    // console.log(event.target.value)
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phone book</h2>
      <form onSubmit={addName}>
        <div>
          name:
          <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
      <div>debug: {newName}</div>
    </div>
  );
};

export default App;
