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

export interface Tweet {
  id: number,
  userId: number,
  text: string;
  timestamp: string;
  imageUrl: string;
  likes: number;
  user: {
    id: number;
    email: string
    name: string
    username: string;
    imageUrl: string;
  }
}