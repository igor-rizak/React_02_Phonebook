import { Component } from 'react';
import { Filter } from 'components/Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import { Contacts } from './Contacts/Contacts';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    id: '',
    name: '',
    number: '',
    filter: '',
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleAddContact = values => {
    const { contacts } = this.state;
    const newContact = {
      id: nanoid(),
      ...values,
    };

    // Check for duplicate NAME
    if (contacts.some(contact => contact.name === newContact.name)) {
      alert('This NAME already exists.');
      return;
    }
    // Check for duplicate NUMBER
    if (contacts.some(contact => contact.number === newContact.number)) {
      alert('This NUMBER already exists.');
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  };

  render() {
    const { name, number } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <div>
        <h1>PHONEBOOK</h1>
        <ContactForm
          name={name}
          number={number}
          onInputChange={this.handleInputChange}
          onAddContact={this.handleAddContact}
        />
        <Filter
          value={this.state.filter}
          handleFilterChange={this.handleFilterChange}
        />
        <Contacts
          contacts={filteredContacts}
          onInputChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default App;
