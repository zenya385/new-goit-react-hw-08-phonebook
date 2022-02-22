import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContactApi,
  getContactsApi,
  removeContactApi,
} from '../../utils/mockAPI';

export const addContact = createAsyncThunk(
  'contact/add',
  async (item, thunkApi) => {
    try {
      const res = await addContactApi(item);
      return res.data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);
export const getContacts = createAsyncThunk(
  'contact/get',
  async (_, thunkApi) => {
    try {
      const res = await getContactsApi();
      return res.data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);
export const removeContact = createAsyncThunk(
  'contact/remove',
  async (id, thunkApi) => {
    try {
      await removeContactApi(id);
      return id;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);
