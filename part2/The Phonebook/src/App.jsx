import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const addDetails = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
      number: newNumber
    };

    const nameExists = persons.some(person => person.name === newName);

    if (nameExists) {
      alert(newName + " is already added to the phonebook");
    } else {
      setPersons(persons.concat(nameObject));
      setNewName('');
      setNewNumber('');
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addDetails}>
        <div>name: <input value={newName} onChange={handleNameChange} /></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => (
        <li key={person.name}>{person.name} {person.number}</li>
      ))}
    </div>
  )
}

export default App
