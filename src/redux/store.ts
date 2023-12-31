import { configureStore } from '@reduxjs/toolkit'
import authenticationReducer from './authentication/authentication.slice';
import tweetsReducer from './tweets/tweets.slice';

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    tweets: tweetsReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch