import axios from "axios";
import { PostUser } from "../../utils/types";
import appUtils from "../../utils/utils";
import { SECURE_STORE_KEYS } from "../../utils/constants";

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
    const result = await axios.post(`${BASE_URL}/signin`, user);
    appUtils.saveToSecureStore(SECURE_STORE_KEYS.CURRENT_USER_DATA, JSON.stringify(result.data))
    return {
      data: result.data,
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
    return {
      data: results.data,
    }
  } catch (error) {
    return {
      data: [],
    }
  }
}

