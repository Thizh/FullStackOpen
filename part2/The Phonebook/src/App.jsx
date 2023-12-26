import { useState, useEffect } from 'react'
import Person from './components/Person'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import axios from 'axios'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [searchName, setSearchName] = useState('');

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(searchName.toLowerCase())
  )

  useEffect(() => {
    personService
      .getAll()
      .then(initialPerson => {
        setPersons(initialPerson)
      })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchName={searchName} setSearchName={setSearchName} />
      <h2>add a new</h2>
      <PersonForm setPersons={setPersons} persons={persons} />
      <h2>Numbers</h2>
      {filteredPersons.map(person => (
        <Person key={person.name} person={person} />
      ))}
    </div>
  )
}

export default App
