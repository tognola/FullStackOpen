import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Notification from './components/Notification'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personsService from './services/persons'

function App() {
  const [ persons, setPersons] = useState([])
  
  const [ newName, setNewName ] = useState('');
  const [ newPhone, setNewPhone ] = useState('');
  const [ filter, setFilter]  = useState('');
  const [ notification, setNotification ] = useState({});

  const addPerson = (e) => {
    e.preventDefault();

    const newPerson = {
      name: newName,
      number: newPhone
    }
    
    const person = persons.find(p => p.name == newName)
    if (person){
      if(window.confirm(`${newName} is already added to the phonebook, replace the old number?`)){
        const changedPerson = {...newPerson, id: person.id}
        personsService.update(changedPerson).then(
          data => {
            setPersons(persons.map(p => p.id !== data.id ? p : data))
            setNotification({message: `Modified ${data.name}`, success: true})
            setTimeout(() => setNotification({message:null}), 5000)
          }
        ).catch(
          () => {
            setNotification({message: `${person.name} has already been removed from server`, success: false})
            setTimeout(()=>setNotification({message:null}), 5000)
          }
        )
      }
    }
    else{
      personsService.create(newPerson).then(
        data => {
          setPersons(persons.concat(data))
          setNotification({message: `Added ${data.name}`, success: true})
          setTimeout(() => setNotification({message:null}), 5000)
        }
      )      
    }

  }

  const deletePerson = (person) => () => {
    console.log(person.id)
    if(window.confirm(`Delete ${person.name}`)) {
      personsService.deletePerson(person.id).then(
        data =>{
          setPersons(persons.filter(elem => elem.id !== person.id ))
        }
      ).catch(
        () => {
          setNotification({message: `${person.name} has already been removed from server`, success: false})
          setTimeout(()=>setNotification({message:null}), 5000)
        }
      )
    }
  }

  const handleNameChange = (event) => {    
    setNewName(event.target.value)  
  }
  const handlePhoneChange = (event) => {    
    setNewPhone(event.target.value)  
  }

  const filterPersons = (event) => {    
    setFilter(event.target.value.trim().toLowerCase())
  }

  useEffect(() => {
    personsService.getAll().then(
      data => setPersons(data)
    )
  }, [])

  const personsToShow = persons.filter(
    person => person.name.toLowerCase().includes(filter));

  
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message = {notification.message} success={notification.success}/>
      <Filter filter={filterPersons} />

      <h3>add a new</h3>
      <PersonForm addPerson = {addPerson}
                  newName = {newName} handleNameChange = {handleNameChange}
                  newPhone = {newPhone} handlePhoneChange = {handlePhoneChange}
                  />

      <h2>Numbers</h2>
      <Persons persons = {personsToShow} deletePerson = {deletePerson}/>
    </div>
  )
}

export default App;
