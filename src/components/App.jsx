import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import { Headers } from './Headers/Headers';
import { Filter } from 'components/Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import { Contacts } from './Contacts/Contacts';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem('contacts');
    return JSON.parse(savedContacts);
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = contact => {
    const isInContacts = contacts.some(
      ({ name, number }) =>
        name.toLowerCase().trim() === contact.name.toLowerCase().trim() ||
        number.trim() === contact.number.trim()
    );

    if (isInContacts) {
      if (
        contacts.some(
          ({ name }) =>
            name.toLowerCase().trim() === contact.name.toLowerCase().trim()
        )
      ) {
        alert(`Це ім'я - ${contact.name} вже є в контактах`);
      } else if (
        contacts.some(({ number }) => number.trim() === contact.number.trim())
      ) {
        alert(`Цей телефон - ${contact.number} вже є в контактах`);
      }
      return;
    }

    setContacts(prevContacts => [
      ...prevContacts,
      { id: nanoid(), ...contact },
    ]);
  };

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const removeContact = contactId => {
    setContacts(contacts.filter(({ id }) => id !== contactId));
  };

  return (
    <div>
      <Headers />
      <ContactForm onAddContact={addContact} />
      <Contacts
        contacts={getFilteredContacts()}
        onRemoveContact={removeContact}
      />
      <Filter value={filter} handleFilterChange={handleFilterChange} />
    </div>
  );
};
