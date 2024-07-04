import { Component } from 'react';
import { Filter } from 'components/Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import { Contacts } from './Contacts/Contacts';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    id: '',
    name: '',
    number: '',
    filter: '',
  };
  componentDidMount() {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      this.setState({ contacts: JSON.parse(storedContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

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

    if (contacts.some(contact => contact.name === newContact.name)) {
      alert('This NAME already exists.');
      return;
    }
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

  removeContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
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
          onRemoveContact={this.removeContact}
        />
      </div>
    );
  }
}

export default App;
