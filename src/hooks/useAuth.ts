import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { PostUser } from '../utils/types';
import authenticationActions from '../redux/authentication/authentication.actions';

const useAuth = () => {

  const dispatch = useDispatch<AppDispatch>();
  const usersList = useSelector((state: RootState) => state.authentication.usersData);
  const getUsersListLoading = useSelector((state: RootState) => state.authentication.getUsersDataLoading);

  const isAuthenticated = useSelector((state: RootState) => state.authentication.isAuthenticated);
  const createUserLoading = useSelector((state: RootState) => state.authentication.createUserLoading);
  const createUserErrorMessage = useSelector((state: RootState) => state.authentication.createUserErrorMessage);

  const getUsersList = () => dispatch(authenticationActions.getUsersAsync());
  const createUser = (user: PostUser) => dispatch(authenticationActions.createUserAsync(user));


  return {
    usersList,
    getUsersListLoading,
    createUserLoading,
    createUserErrorMessage,
    isAuthenticated,
    getUsersList,
    createUser,
  }
}

export default useAuth