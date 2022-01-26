export function setCookie(name: string, value: string, seconds: number) {
  document.cookie = setCookieString(name, value, seconds);
}

export function setCookieString(name: string, value: string, seconds: number) {
  let expires = '';
  if (seconds) {
    const date = new Date();
    date.setTime(date.getTime() + seconds * 1000);
    expires = `; expires=${date.toUTCString()}`;
  }
  return `${name}=${value || ''}${expires}; path=/`;
}

export function eraseCookie(name: string) {
  document.cookie = `${name}=; Max-Age=-99999999;`;
}

export function setCookieObject(key: string, object: object, seconds: number = 30 * 24 * 60 * 60) {
  try {
    setCookie(key, encodeURIComponent(JSON.stringify(object)), seconds);
  } catch (err) {
    console.log(`Could not save the ${key} in cookie`);
  }
}
