import * as SecureStore from 'expo-secure-store';
import { SECURE_STORE_KEYS } from './constants';

const saveToSecureStore = async (key: SECURE_STORE_KEYS, value: string) => {
  await SecureStore.setItemAsync(key, value);
}

const getSecureStoreValue = async (key: SECURE_STORE_KEYS) => {
  return await SecureStore.getItemAsync(key);
}

const appUtils = {
  saveToSecureStore,
  getSecureStoreValue,
}

export default appUtils;