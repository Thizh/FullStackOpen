import { useState } from 'react'

const PersonForm = ({setPersons, persons}) => {

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
        <form onSubmit={addDetails}>
            <div>name: <input value={newName} onChange={handleNameChange} /></div>
            <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm