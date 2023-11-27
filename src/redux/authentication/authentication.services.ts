import axios from "axios";
import { PostUser } from "../../utils/types";

const BASE_URL = 'http://localhost:3000';

export const createUser = async (
  user: PostUser,
  thunkAPI: any
) => {
  try {
    await axios.post(`${BASE_URL}/users`, user);
    return {
      data: true,
      errorMessage: '',
    }
  } catch (error: any) {
    return thunkAPI.rejectWithValue({
      error: error?.response?.data?.error ?? ''
    });
  }
}

export const singIn = async (
  user: Pick<PostUser, 'username' | 'password'>,
  thunkAPI: any
) => {
  try {
    await axios.post(`${BASE_URL}/signin`, user);
    return {
      data: true,
    }
  } catch (error: any) {
    return thunkAPI.rejectWithValue({
      error: error?.response?.data?.error ?? ''
    });
  }
}

export const getUsers = async () => {
  try {
    const results = await axios(`${BASE_URL}/users`);
    // console.log(JSON.stringify(results.data, null, 3));
    return {
      data: results.data,
    }
  } catch (error) {
    return {
      data: [],
    }
  }
}

