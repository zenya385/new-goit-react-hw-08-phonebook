import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import combineReducers from './contacts/contactsReducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  // logger,
];

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

export const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsPersistConfig, combineReducers),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

// // import configureStore from 'reduserjs/toolkit';

// import { createStore, combineReducers } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';
// import contactsReduser from './contacts/contactsReduser';

// const rootReduser = combineReducers({
//   contacts: contactsReduser,
// });

// const store = createStore(rootReduser, devToolsEnhancer());

// export default store;
