import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/contacts/contactsOperations';

const filterInputHandler = (filter, items) => {
  if (items.length > 0) {
    return items.filter(el =>
      el.name.toLowerCase().includes(filter?.toLowerCase())
    );
  }
  return [];
};

const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);
  const items = useSelector(state => state.contacts.items);
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
              onClick={() => dispatch(removeContact(user.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
