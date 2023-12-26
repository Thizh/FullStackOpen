import { useState } from 'react'
import personService from '../services/persons'

const PersonForm = ({ setPersons, persons }) => {

    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');

    const addDetails = (event) => {
        event.preventDefault();
        const PersonObject = {
            name: newName,
            number: newNumber
        };

        const nameExists = persons.some(person => person.name === newName);

        if (nameExists) {
            alert(newName + " is already added to the phonebook");
        } else {
            personService
                .create(PersonObject)
                .then(createdPerson => {
                    setPersons(persons.concat(createdPerson));
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