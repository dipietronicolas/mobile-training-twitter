export enum ROUTER_SCREEN_NAMES {
  MAIN_APP = 'MAIN_APP',
  HOME = 'HOME',
  SIGNIN = 'SIGNIN',
  LOGIN = 'LOGIN',
  MESSAGE = 'MESSAGE',
  SEARCH = 'SEARCH',
  PROFILE = 'PROFILE',
}

export enum TWEET_TYPES {
  ALL_TWEETS = 'ALL_TWEETS',
  FOR_YOU_TWEETS = 'FOR_YOU_TWEETS',
}

export enum SECURE_STORE_KEYS {
  CURRENT_USER_DATA = 'CURRENT_USER_DATA',
}

export const LOADING_STATE = {
  LOADING: {
    loading: true,
    success: false,
    error: false,
  },
  SUCCESS: {
    loading: false,
    success: true,
    error: false,
  },
  ERROR: {
    loading: false,
    success: false,
    error: true
  },
  NONE: {
    loading: false,
    success: false,
    error: false,
  }
}