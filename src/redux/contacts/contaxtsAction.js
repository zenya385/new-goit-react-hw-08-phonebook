export const addContact = contact => {
  return { type: 'add/contats', payload: contact };
};

export const removeContacts = id => {
  return {
    type: 'remove/contats',
    payload: id,
  };
};

export const removeContacts = q => {
  return {
    type: 'filter/contats',
    payload: q,
  };
};
