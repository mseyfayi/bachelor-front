import { LocalStorageKeys } from 'common/constants';

export function clearSessionInfo() {
  localStorage.removeItem('loginInfo');
}

export const getLocalStorage = (key: LocalStorageKeys) => JSON.parse(localStorage.getItem(key) || '{}');
export const setLocalStorage = (key: LocalStorageKeys, data: unknown) => localStorage.setItem(key, JSON.stringify(data));
