import { useState, useEffect } from 'react'
import Person from './components/Person'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import personService from './services/persons'
import Notification from './components/Notification'
import './index.css'

const App = () => {
  const [persons, setPersons] = useState([])
  const [searchName, setSearchName] = useState('')
  const [notification, setNotification] = useState('')
  const [isSuccess, setIsSuccess] = useState(null)

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

  const deletePersonOf = (id) => {
    const person = persons.find(p => p.id === id)

    if (window.confirm(`Delete ${person.name} ?`)) {
      personService
      .deleteID(id)
      .then( () => {
        setPersons(persons.filter(p => p.id !== id))
      })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} isSuccess={isSuccess} />
      <Filter searchName={searchName} setSearchName={setSearchName} />
      <h2>add a new</h2>
      <PersonForm setPersons={setPersons} persons={persons} setNotification={setNotification} setIsSuccess={setIsSuccess} />
      <h2>Numbers</h2>
      {filteredPersons.map(person => (
        <Person 
        key={person.name} 
        person={person} 
        deletePerson={() => deletePersonOf(person.id)}/>
      ))}
    </div>
  )
}

export default App
