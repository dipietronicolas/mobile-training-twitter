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