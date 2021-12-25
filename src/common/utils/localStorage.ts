import { LocalStorageKeys } from 'common/constants';

export function clearSessionInfo() {
  localStorage.removeItem('loginInfo');
}

export const getLocalStorage = (key: LocalStorageKeys) => JSON.parse(localStorage.getItem(key) || '{}');
