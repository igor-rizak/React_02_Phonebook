import React from 'react';

export const Contacts = ({ contacts, onInputChange }) => {
  return (
    <>
      <h2>Contacts</h2>
      <span>Find contacts by name</span>
      <input type="text" onChange={onInputChange} name="filter" />
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <span>{contact.name}</span>
            <span>{contact.number}</span>
          </li>
        ))}
      </ul>
    </>
  );
};
