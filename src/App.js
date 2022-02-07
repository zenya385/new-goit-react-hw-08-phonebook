import React, { Component } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import s from './App.module.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    this.setState({ contacts });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  formSubmitHandler = user => {
    if (
      this.state.contacts.find(el => el.name.includes(user.name)) !== undefined
    ) {
      alert(`${user.name} is already in contacts`);
    } else {
      this.setState(prev => ({
        contacts: [...prev.contacts, user],
      }));
    }
  };
  setFilter = e => {
    const { value } = e.target;
    this.setState({
      filter: value,
    });
  };

  filterInputHandler = () =>
    this.state.contacts.filter(item =>
      item.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

  removeUser = id => {
    this.setState(prev => ({
      contacts: [...prev.contacts.filter(contact => contact.id !== id)],
    }));
  };
  render() {
    return (
      <div className={s.app}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <h2>Contacts</h2>
        <Filter filter={this.state.filter} setFilter={this.setFilter} />
        <ContactList
          users={this.filterInputHandler()}
          removeUser={this.removeUser}
        />
      </div>
    );
  }
}

export default App;
