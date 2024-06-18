import React from 'react';

export const Contacts = ({ contacts }) => {
  return (
    <>
      <h2>Contacts</h2>
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
