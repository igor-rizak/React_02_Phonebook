import React from 'react';
import { ListStyle, Heading } from './Contacts.styled';

export const Contacts = ({ contacts }) => {
  return (
    <>
      <Heading>Contacts</Heading>
      <ul>
        {contacts.map(contact => (
          <ListStyle key={contact.id}>
            <span>{contact.name}</span>
            <span>{contact.number}</span>
          </ListStyle>
        ))}
      </ul>
    </>
  );
};
