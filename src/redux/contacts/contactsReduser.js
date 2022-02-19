import { combineReducers } from 'redux';

// action = {type:"action/type", payload:"data"}

const contactReducer = (state = [], action) => {
  switch (action.type) {
    case 'contacts/add':
      return [...state, action.payload];

    case 'contacts/remove':
      return state.filter(contact => contact.id !== action.payload);

    default:
      return state;
  }
};

const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'contacts/filter':
      return state.filter(el =>
        el.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    default:
      return state;
  }
};

const contactsReduser = combineReducers({
  items: contactReducer,
  filter: filterReducer,
});
export default contactsReduser;

//   const setFilterValue = e => {
//     const { value } = e.target;
//     setFilter(value);
//   };

//   const filterInputHandler = () =>
//     contacts.filter(item =>
//       item.name.toLowerCase().includes(filter.toLowerCase())
//     );

//   const removeUser = id => {
//     setContacts(prevContacts =>
//       prevContacts.filter(contact => contact.id !== id)
//     );
//   };
