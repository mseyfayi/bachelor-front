export const localStorageKeys = {
  ACCESS_TOKEN: 'ACCESS_TOKEN',
};
export type LocalStorageKeys = typeof localStorageKeys[keyof typeof localStorageKeys];

export const fetchMethods = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};
export type FetchMethods = typeof localStorageKeys[keyof typeof localStorageKeys];
