import axios from 'axios';

axios.defaults.baseURL = 'https://6213e71589fad53b1f0551af.mockapi.io/api/v1/';

export const addContactApi = item => {
  return axios.post('/contacts', item);
};

export const getContactsApi = () => {
  return axios.get('/contacts');
};

export const removeContactApi = id => {
  return axios.delete(`/contacts/${id}`);
};
