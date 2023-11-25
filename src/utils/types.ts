export interface LoadingState {
  loading: boolean;
  success: boolean;
  error: boolean;
}

export interface User {
  name: string;
  username: string;
  password: string;
  email: string;
  id: number;
}

export interface PostUser extends Omit<User, 'id'> {};