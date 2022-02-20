import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/contacts/contactsAction';

const filterInputHandler = (filter, items) => {
  return items.filter(el =>
    el.name.toLowerCase().includes(filter.toLowerCase())
  );
};

const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filterReducer);
  const items = useSelector(state => state.contacts.itemsReducer);
  const users = filterInputHandler(filter, items);
  return (
    <>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <span>{user.name}: </span>
            {user.number}
            <button
              type="button"
              onClick={e => dispatch(removeContact(user.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

// ContactList.propTypes = {
//   users: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//     })
//   ),
//   removeUser: PropTypes.func.isRequired,
// };

export default ContactList;
