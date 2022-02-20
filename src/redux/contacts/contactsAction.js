import { createAction, nanoid } from '@reduxjs/toolkit';

const addContact = createAction('contact/add', contact => ({
  payload: {
    ...contact,
    id: nanoid(),
  },
}));
const removeContact = createAction('contact/removes');

const filterContacts = createAction('filter/contats');

export { addContact, removeContact, filterContacts };
