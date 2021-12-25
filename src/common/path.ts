const backendServer = 'http://localhost:5000/api';

const getQueriedUrl = (url: string, parameters: { [key: string]: unknown }): string => {
  const getDelimiter = (currentUrl: string) => (currentUrl.includes('?') ? '&' : '?');
  return Object.keys(parameters).reduce(
    (queriedUrl, parameter) =>
      parameters[parameter] ? `${queriedUrl}${getDelimiter(queriedUrl)}${parameter}=${parameters[parameter]}` : queriedUrl,
    url,
  );
};

export const getGetPostsUrl = (filters: Array<string>) => getQueriedUrl(`${backendServer}/posts`, { filters });
export const getPostPostsUrl = () => `${backendServer}/posts`;
