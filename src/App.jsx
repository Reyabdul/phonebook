import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./services/persons"

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setFilter] = useState("");


  // useEffect(() => {
  //   // console.log("'effect' initialized")
  //   axios
  //   .get("http://localhost:3000/persons")
  //   .then(response => {
  //     // console.log("fulfilled")
  //     setPersons(response.data)
  //   })
  // }, [])  


  useEffect(() => {
    personService
      .getAll()
      .then(allPerson => {
        setPersons(allPerson)
      })
  }, [])

  // console.log(persons)

  //ADD
  const addNewContact = (event) => {
    event.preventDefault();
    // console.log("button clicked", event.target)
    const personObject = {
      name: newName,
      number: newNumber,
      // id: String(persons.length + 1),
    };

    const existingNames = persons.map((person) => {
      return person.name;
    });

    if (existingNames.includes(personObject.name)) {
      alert(`${newName} already exists`);
      return false;
    }

    personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName("")
        setNewNumber("")
      })
  };


  // DELETE
  const handleDelete = (person) => {
    const msg = `Delete ${person.name}?`
    const confirm = window.confirm(msg)
    if (confirm) {
      personService
        .deletePerson(person.id)
        .then(persons =>
          setPersons(persons)
        
    )}
    return alert(`${person.name} successfully deleted`)
  }
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
      <ul>
        {persons.map(person =>
          <Persons
            key={person.name}
            person={person}
            handleDelete={() => handleDelete(person)} 
          />
        )}
      </ul>
    </div>
  );
};

export default App;
