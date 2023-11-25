import { createSlice } from '@reduxjs/toolkit';
import { LOADING_STATE } from '../../utils/constants';
import { LoadingState } from '../../utils/types';
import authenticationActions from './authentication.actions';

export interface AuthenticationState {
  isAuthenticated: boolean;
  createUserLoading: LoadingState;
  createUserErrorMessage: string;
  usersData: any[];
  getUsersDataLoading: LoadingState;
}

const initialState: AuthenticationState = {
  isAuthenticated: false,
  createUserLoading: LOADING_STATE.NONE,
  createUserErrorMessage: '',
  usersData: [],
  getUsersDataLoading: LOADING_STATE.NONE,
}

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {},
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
  }
})

export default authenticationSlice.reducer;