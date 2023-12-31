import { useState } from 'react'
import personService from '../services/persons'

const PersonForm = ({ setPersons, persons, setNotification, setIsSuccess }) => {

    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');

    const addDetails = (event) => {
        event.preventDefault();
        const PersonObject = {
            name: newName,
            number: newNumber
        };

        const nameExists = persons.some(person => person.name === newName)
        const numberExists = persons.some(person => person.number === newNumber)
        const person = persons.find(p => p.name === newName)

        if (nameExists) {
            if (numberExists) {
                alert(newName + " is already added to the phonebook")
            } else {
                if (window.confirm(`${newName} is already added to phonebook, replace the old number with new one?`)) {
                    personService
                        .update(person.id, { ...person, number: newNumber })
                        .then(updatedPerson => {
                            setPersons(persons.map(p => (p.id === updatedPerson.id ? updatedPerson : p)))
                            setNotification(`${newName}s number is changed, and it is now ${newNumber}`)
                            setIsSuccess(true)
                            setNewName('');
                            setNewNumber('');
                        })
                        .catch(error => {
                            setNotification(`information of ${newName} has already been removed from the server`)
                            setIsSuccess(false)
                        })
                }
            }

        } else {
            personService
                .create(PersonObject)
                .then(createdPerson => {
                    setPersons(persons.concat(createdPerson));
                    setNotification(`Added ${newName}`)
                    setIsSuccess(true)
                    setNewName('');
                    setNewNumber('');
                })
        }
    }
    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    return (
        <form onSubmit={addDetails}>
            <div>name: <input value={newName} onChange={handleNameChange} /></div>
            <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
            <button type="submit">add</button>
        </form>
    )
}

export default PersonForm
