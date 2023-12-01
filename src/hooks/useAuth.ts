import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { PostUser } from '../utils/types';
import { authenticationActions } from '../redux/authentication/authentication.slice';
import { tweetsActions } from '../redux/tweets/tweets.slice';

const useAuth = () => {

  const dispatch = useDispatch<AppDispatch>();
  const usersList = useSelector((state: RootState) => state.authentication.usersData);
  const getUsersListLoading = useSelector((state: RootState) => state.authentication.getUsersDataLoading);

  const isAuthenticated = useSelector((state: RootState) => state.authentication.isAuthenticated);
  const createUserLoading = useSelector((state: RootState) => state.authentication.createUserLoading);
  const createUserErrorMessage = useSelector((state: RootState) => state.authentication.createUserErrorMessage);

  const signInErrorMessage = useSelector((state: RootState) => state.authentication.signInErrorMessage);
  const signInLoading = useSelector((state: RootState) => state.authentication.signInLoading);

  const getUsersList = () => dispatch(authenticationActions.getUsersAsync());
  const createUser = (user: PostUser) => dispatch(authenticationActions.createUserAsync(user));
  const signIn = (user: Pick<PostUser, 'username' | 'password'>) => {
    dispatch(tweetsActions.resetState())
    dispatch(authenticationActions.singInAsync(user));
  }

  const logout = () => dispatch(authenticationActions.logout());
  const resetAuthenticationState = () => dispatch(authenticationActions.resetState());
  const setCurrentUserData = (user: any) => {
    dispatch(authenticationActions.setCurrentUserData(user))
  }

  return {
    usersList,
    getUsersListLoading,
    createUserLoading,
    createUserErrorMessage,
    isAuthenticated,
    signInErrorMessage,
    signInLoading,
    getUsersList,
    createUser,
    signIn,
    resetAuthenticationState,
    logout,
    setCurrentUserData,
  }
}

export default useAuth