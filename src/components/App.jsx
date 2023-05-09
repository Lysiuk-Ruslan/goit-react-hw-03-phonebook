import React, { Component } from 'react';
import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleContacts = ({ id, name, number }) => {
    if (this.state.contacts.some(e => e.name === name)) {
      alert(`${name} is alredy in contacts`);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [...contacts, { id, name, number }],
      }));
    }
  };

  renderContactsList = () => {
    const query = this.state.filter;
    return this.state.filter === ''
      ? this.state.contacts
      : this.state.contacts.filter(
          contact =>
            contact.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
        );
  };

  handleFilter = evt => {
    evt.preventDefault();
    this.setState({ filter: evt.target.value });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  render() {
    return (
      <>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.handleContacts} />
        </Section>
        <Section title="Contacts">
          <Filter handleFilter={this.handleFilter} />
          <ContactList
            contactsList={this.renderContactsList()}
            deleteContact={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}
