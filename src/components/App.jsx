import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Contacts } from './Contacts';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    id: '',
    name: '',
    number: '',
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
        <Contacts contacts={contacts} />
      </div>
    );
  }
}

export default App;
