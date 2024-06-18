import React from 'react';

export const ContactForm = ({ name, number, onInputChange, onAddContact }) => {
  return (
    <form onSubmit={onAddContact}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={onInputChange}
          required
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          onChange={onInputChange}
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};
