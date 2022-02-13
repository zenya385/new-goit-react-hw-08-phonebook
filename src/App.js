import { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import s from './App.module.css';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = user => {
    if (contacts.find(el => el.name.includes(user.name)) !== undefined) {
      alert(`${user.name} is already in contacts`);
    } else {
      setContacts(contacts => [...contacts, user]);
    }
  };

  const setFilterValue = e => {
    const { value } = e.target;
    setFilter(value);
  };

  const filterInputHandler = () =>
    contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );

  const removeUser = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  return (
    <div className={s.app}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />

      <h2>Contacts</h2>
      <Filter filter={filter} setFilter={setFilterValue} />
      <ContactList users={filterInputHandler(filter)} removeUser={removeUser} />
    </div>
  );
}
