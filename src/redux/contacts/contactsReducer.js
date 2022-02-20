import { addContact, removeContact, filterContacts } from './contactsAction';
import { createReducer, combineReducers } from '@reduxjs/toolkit';

const test = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const itemsReducer = createReducer(test, {
  [addContact]: (state, action) => [...state, action.payload],
  [removeContact]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

const filterReducer = createReducer('', {
  [filterContacts]: (_, action) => action.payload,
});

// const contactsReducer = combineReducers({
//   items: itemsReducer,
//   filter: filterReducer,
// });

// export default contactsReducer;

export default combineReducers({ itemsReducer, filterReducer });
