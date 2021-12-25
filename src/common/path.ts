const backendServer = 'http://localhost:5000/api';

const getQueriedUrl = (url: string, parameters: { [key: string]: unknown }): string => {
  const getDelimiter = (currentUrl: string) => (currentUrl.includes('?') ? '&' : '?');
  return Object.keys(parameters).reduce(
    (queriedUrl, parameter) =>
      parameters[parameter] ? `${queriedUrl}${getDelimiter(queriedUrl)}${parameter}=${parameters[parameter]}` : queriedUrl,
    url,
  );
};

export const getGetPostsUrl = (page = 1, limit = 10) => getQueriedUrl(`${backendServer}/posts`, { page, limit });
export const getPostPostsUrl = () => `${backendServer}/posts`;
