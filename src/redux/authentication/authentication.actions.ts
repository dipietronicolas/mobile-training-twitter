import { createAsyncThunk } from '@reduxjs/toolkit';
import { createUser, getUsers } from './authentication.services';

export const getUsersAsync = createAsyncThunk(
  'users/getUsersAsync',
  getUsers
)

export const createUserAsync = createAsyncThunk(
  'users/createUserAsync',
  createUser
)

const authenticationActions = {
  getUsersAsync,
  createUserAsync
}

export default authenticationActions;