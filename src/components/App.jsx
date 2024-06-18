import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Contacts } from './Contacts';
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

  handleAddContact = event => {
    event.preventDefault();
    const { name, number, contacts } = this.state;
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState({
      contacts: [...contacts, newContact],
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number, contacts } = this.state;

    return (
      <div>
        <h1>PHONEBOOK</h1>
        <ContactForm
          name={name}
          number={number}
          onInputChange={this.handleInputChange}
          onAddContact={this.handleAddContact}
        />
        <Contacts contacts={contacts} onInputChange={this.handleInputChange} />
      </div>
    );
  }
}

export default App;
