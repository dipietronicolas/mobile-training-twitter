import { createSlice } from '@reduxjs/toolkit';
import { LOADING_STATE, SECURE_STORE_KEYS } from '../../utils/constants';
import { LoadingState, User } from '../../utils/types';
import {
  getUsersAsync,
  createUserAsync,
  singInAsync,
} from './authentication.actions';
import appUtils from '../../utils/utils';

export interface AuthenticationState {
  isAuthenticated: boolean;
  signInLoading: LoadingState;
  signInErrorMessage: string;
  createUserLoading: LoadingState;
  createUserErrorMessage: string;
  usersData: any[];
  getUsersDataLoading: LoadingState;
  currentUserData: Partial<User>;
  getCurrentUserDataLoading: LoadingState;
}

const initialState: AuthenticationState = {
  isAuthenticated: false,
  signInLoading: LOADING_STATE.NONE,
  signInErrorMessage: '',
  createUserLoading: LOADING_STATE.NONE,
  createUserErrorMessage: '',
  usersData: [],
  getUsersDataLoading: LOADING_STATE.NONE,
  currentUserData: {},
  getCurrentUserDataLoading: LOADING_STATE.NONE
}

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    resetState: (state) => {
      state.signInErrorMessage = '';
      state.createUserErrorMessage = '';
      state.signInLoading = LOADING_STATE.NONE;
      state.createUserLoading = LOADING_STATE.NONE;
      state.getUsersDataLoading = LOADING_STATE.NONE;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      appUtils.removeFromSecureStore(SECURE_STORE_KEYS.CURRENT_USER_DATA)
    },
    setCurrentUserData: (state, action) => {
      state.currentUserData = action.payload;
      state.isAuthenticated = true;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(authenticationActions.getUsersAsync.pending, (state) => {
        state.getUsersDataLoading = LOADING_STATE.LOADING;
        state.usersData = []
      })
      .addCase(authenticationActions.getUsersAsync.fulfilled, (state, action) => {
        state.usersData = action.payload.data;
        state.getUsersDataLoading = LOADING_STATE.SUCCESS;
      })
      .addCase(authenticationActions.getUsersAsync.rejected, (state) => {
        state.getUsersDataLoading = LOADING_STATE.ERROR;
        state.usersData = [];
      })
      .addCase(authenticationActions.createUserAsync.pending, (state) => {
        state.createUserLoading = LOADING_STATE.LOADING;
        state.isAuthenticated = false;
        state.createUserErrorMessage = '';
      })
      .addCase(authenticationActions.createUserAsync.fulfilled, (state, action) => {
        state.createUserLoading = LOADING_STATE.SUCCESS;
        state.isAuthenticated = action.payload.data;
        state.createUserErrorMessage = '';
      })
      .addCase(authenticationActions.createUserAsync.rejected, (state, action: any) => {
        state.createUserLoading = LOADING_STATE.ERROR;
        state.isAuthenticated = false;
        state.createUserErrorMessage = action.payload.error
      })
      .addCase(authenticationActions.singInAsync.pending, (state) => {
        state.isAuthenticated = false;
        state.signInErrorMessage = '';
        state.signInLoading = LOADING_STATE.LOADING;
      })
      .addCase(authenticationActions.singInAsync.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.signInErrorMessage = '';
        state.signInLoading = LOADING_STATE.SUCCESS;
        state.currentUserData = action.payload.data
      })
      .addCase(authenticationActions.singInAsync.rejected, (state, action: any) => {
        state.isAuthenticated = false;
        state.signInErrorMessage = action.payload.error
        state.signInLoading = LOADING_STATE.ERROR;
      })
  }
})

export const { actions } = authenticationSlice;

export const authenticationActions = {
  getUsersAsync,
  createUserAsync,
  singInAsync,
  ...actions,
}

export default authenticationSlice.reducer;