import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setFilter] = useState("");

  useEffect(() => {
    console.log("'effect' initialized")
    axios
    .get("http://localhost:3000/persons")
    .then(response => {
      console.log("fulfilled")
      setPersons(response.data)
    })
  }, [])  

  const addNewContact = (event) => {
    event.preventDefault();
    // console.log("button clicked", event.target)

    const newContact = {
      name: newName,
      number: newNumber,
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
    setNewNumber("");
    setNewName("");
  };

  // console.log(persons)

  const handleNameChange = (event) => {
    // console.log(event.target.value)
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    // console.log(event.target.value)
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    // console.log(event.target.value)
    setFilter(event.target.value);
  };

  return (
    <div>
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />

      <h3>Add a new Contact</h3>

      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        addNewContact={addNewContact}
      />

      <h3>Numbers</h3>
      <Persons persons={persons} />

      <div>debug: {newName}</div>
    </div>
  );
};

export default App;
