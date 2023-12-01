import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUser,
  getUsers,
  singIn,
} from './authentication.services';

export const getUsersAsync = createAsyncThunk(
  'users/getUsersAsync',
  getUsers
)

export const createUserAsync = createAsyncThunk(
  'users/createUserAsync',
  createUser
)

export const singInAsync = createAsyncThunk(
  'singIn/singInAsync',
  singIn
)


