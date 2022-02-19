// import configureStore from 'reduserjs/toolkit';

import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import contactsReduser from './contacts/contactsReduser';
console.log(contactsReduser);

const rootReduser = combineReducers({
  contacts: contactsReduser,
});

const store = createStore(rootReduser, devToolsEnhancer());

export default store;
