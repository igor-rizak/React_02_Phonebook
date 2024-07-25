import React from 'react';
import {
  Heading,
  List,
  ListItem,
  ContactName,
  ContactNumber,
  DeleteButton,
} from './Contacts.styled';

export const Contacts = ({ contacts, onRemoveContact }) => {
  return (
    <>
      <Heading>Contacts</Heading>
      <List>
        {contacts.map(contact => (
          <ListItem key={contact.id}>
            <ContactName>{contact.name}</ContactName>
            <ContactNumber>{contact.number}</ContactNumber>
            <DeleteButton
              type="button"
              name="delete"
              onClick={() => onRemoveContact(contact.id)}
            >
              Delete
            </DeleteButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};
