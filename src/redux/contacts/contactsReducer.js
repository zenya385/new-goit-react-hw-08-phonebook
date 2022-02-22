import { addContact, getContacts, removeContact } from './contactsOperations';
import { filterContacts } from './contactsAction';
import { createReducer, combineReducers } from '@reduxjs/toolkit';

const itemsReducer = createReducer([], {
  [addContact.fulfilled]: (state, { payload }) => {
    const addContact = [...state, payload];
    return addContact;
  },
  [getContacts.fulfilled]: (_, { payload }) => payload,
  [removeContact.fulfilled]: (state, { payload }) => {
    const removeContact = state.filter(({ id }) => id !== payload);
    return removeContact;
  },
});

const filterReducer = createReducer('', {
  [filterContacts]: (_, { payload }) => payload,
});

// const loaderReducer = createReducer(false, {
//   [addContact.pending]: () => true,
//   [addContact.fulfilled]: () => false,
//   [addContact.rejected]: () => false,
//   [getContacts.pending]: () => true,
//   [getContacts.fulfilled]: () => false,
//   [getContacts.rejected]: () => false,
//   [removeContact.pending]: () => true,
//   [removeContact.fulfilled]: () => false,
//   [removeContact.rejected]: () => false,
// });

// export default contactsReducer;
export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  // loader: loaderReducer,
});
