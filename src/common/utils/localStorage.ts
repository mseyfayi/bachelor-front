import { localStorageKeys, LocalStorageKeys } from 'common/constants';
import { eraseCookie } from 'common/utils';

export function clearSessionInfo() {
  localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);
  eraseCookie(localStorageKeys.ACCESS_TOKEN);
}

export const getLocalStorage = (key: LocalStorageKeys) => JSON.parse(localStorage.getItem(key) || '{}');
export const setLocalStorage = (key: LocalStorageKeys, data: unknown) => localStorage.setItem(key, JSON.stringify(data));
