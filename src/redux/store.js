import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import combineReducers from './contacts/contactsReducer';

export const store = configureStore({
  reducer: {
    contacts: combineReducers,
    filter: combineReducers,
    // loader: loaderReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
