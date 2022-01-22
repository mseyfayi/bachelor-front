import { BodyInit } from 'next/dist/server/web/spec-compliant/body';
import { HeadersInit } from 'next/dist/server/web/spec-compliant/headers';
import { fetchMethods, FetchMethods, localStorageKeys } from 'common/constants';
import { clearSessionInfo, getLocalStorage } from 'common/utils/localStorage';

interface Config {
  method: FetchMethods;
  body?: BodyInit;
  headers?: HeadersInit;
  signal?: AbortSignal;
}

type GetConfig = (body?: Record<string | number, unknown>) => Config;
type GetMultiPartConfig = (body?: FormData) => Config;

function getHeaders(isMultipart = false) {
  const token = getLocalStorage(localStorageKeys.ACCESS_TOKEN);
  return {
    ...(!isMultipart ? { 'Content-Type': 'application/json' } : {}),
    'X-Authorization': token,
  };
}

const createGetConfig = (method: FetchMethods) => (body?: Record<string | number, unknown>) => ({
  method,
  headers: getHeaders(),
  body: body ? JSON.stringify(body) : undefined,
});

const createGetMultiPartConfig = (method: FetchMethods) => (body?: FormData) => ({
  method,
  headers: getHeaders(),
  body,
});

export const getPostConfig: GetConfig = createGetConfig(fetchMethods.POST);

export const getPostMultiPartConfig: GetMultiPartConfig = createGetMultiPartConfig(fetchMethods.POST);

export const getPutConfig: GetConfig = createGetConfig(fetchMethods.PUT);

export const getPutMultiPartConfig: GetMultiPartConfig = createGetMultiPartConfig(fetchMethods.PUT);

export const getGetConfig: GetConfig = createGetConfig(fetchMethods.GET);

export const getDeleteConfig: GetConfig = createGetConfig(fetchMethods.DELETE);

export const fetchApi = async <TData>(url: string, config: Config): Promise<TData | undefined> => {
  let flowError;
  try {
    const res = await fetch(url, config);
    const result = await res.json();
    const data = result?.data;
    if (res.status < 200 && res.status >= 300) {
      flowError = data;
      if (res.status === 401) {
        clearSessionInfo();
        setTimeout(() => window.location.assign('/login'), 2000);
      }
    } else {
      return data;
    }
  } catch (err) {
    console.debug(`Error when fetching api: ${url}`, err);
    flowError = {
      code: 'UNKNOWN_ERROR',
      message: 'خطای نامشخص لطفا دوباره سعی کنید',
    };
  }
  if (flowError) {
    throw flowError;
  }
  return undefined;
};
