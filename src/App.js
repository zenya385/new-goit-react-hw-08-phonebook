import { useState, useEffect } from 'react';
import {
  addContact,
  removeContact,
  filterContacts,
} from './redux/contacts/contactsAction';
import { connect } from 'react-redux';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import s from './App.module.css';

function App() {
  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  // });
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const formSubmitHandler = user => {
  //   if (contacts.find(el => el.name.includes(user.name)) !== undefined) {
  //     alert(`${user.name} is already in contacts`);
  //   } else {
  //     setContacts(contacts => [...contacts, user]);
  //   }
  // };

  // const setFilterValue = e => {
  //   const { value } = e.target;
  //   setFilter(value);
  // };
  // const filterInputHandler = () =>
  //   contacts.filter(item =>
  //     item.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // const removeUser = id => {
  //   setContacts(prevContacts =>
  //     prevContacts.filter(contact => contact.id !== id)
  //   );
  // };

  return (
    <div className={s.app}>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

// const mapStateToProps = state => ({
//   contact: state.contact,
//   filter: state.contact,
//   test: 299,
// });

// const mapDispatchToProps = {
//   addContact,
//   removeContact,
//   filterContacts,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
