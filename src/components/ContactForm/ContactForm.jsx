import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import {
  Form,
  InputName,
  Input,
  AddContact,
} from 'components/ContactForm/ContactForm.styled';

export default class ContactForm extends Component {
  state = {
    id: '',
    name: '',
    number: '',
  };
  handleSubmit = e => {
    e.preventDefault();
    const addedContact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };
    this.props.onSubmit(addedContact);
    this.setState({ id: '', name: '', number: '' });
  };

  handleChange = evt => {
    const newContact = evt.target;
    this.setState({ [newContact.name]: newContact.value });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <InputName>Name</InputName>
        <Input
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <InputName>Number</InputName>
        <Input
          type="tel"
          value={this.state.number}
          onChange={this.handleChange}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <AddContact type="submit">Add contact</AddContact>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
