import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/contacts/contactsAction';
import s from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(state => state.contacts.filterReducer);

  const dispatch = useDispatch();

  return (
    <>
      <label className={s.label}>
        Find contacts by name:
        <input
          className={s.input}
          type="text"
          name="filter"
          onChange={e => dispatch(filterContacts(e.target.value))}
          value={filter}
        />
      </label>
    </>
  );
};

export default Filter;
