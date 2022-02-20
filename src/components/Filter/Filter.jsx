import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/contacts/contactsAction';
import s from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(state => state.contacts.filterReducer);

  // filter.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));

  //  const getFilterContacts = state => {

  //   const filter = filterContacts(state);
  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter(({ name }) =>
  //     name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  const dispatch = useDispatch();

  // const filterInputHandler = () =>
  // filter.filter(item =>
  //   item.name.toLowerCase().includes(filter.toLowerCase())
  // );

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

// Filter.propTypes = {
//   filter: PropTypes.string,
//   setFilter: PropTypes.func.isRequired,
// };

export default Filter;

// export default Filter;
