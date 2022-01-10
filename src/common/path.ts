const backendServer = 'http://localhost:5000/api';

const getQueriedUrl = (url: string, parameters: { [key: string]: unknown }): string => {
  const getDelimiter = (currentUrl: string) => (currentUrl.includes('?') ? '&' : '?');
  return Object.keys(parameters).reduce(
    (queriedUrl, parameter) =>
      parameters[parameter] ? `${queriedUrl}${getDelimiter(queriedUrl)}${parameter}=${parameters[parameter]}` : queriedUrl,
    url,
  );
};

export const getGetPostsUrl = (page = 1, limit = 10) => getQueriedUrl(`${backendServer}/v1/posts`, { page, limit });
export const getPostPostsUrl = () => `${backendServer}/v1/posts`;
export const getLikePostUrl = (postId: string) => `${backendServer}/v1/posts/${postId}/like`;
export const getUnlikePostUrl = (postId: string) => `${backendServer}/v1/posts/${postId}/unlike`;
export const getGithubOGUrl = (repoAddress: string) => `${backendServer}/v1/og/${repoAddress}`;
export const getSignInUrl = () => `${backendServer}/v1/auth/signin`;
export const getSignUpUrl = () => `${backendServer}/v1/auth/signup`;
export const getGetCategoriesUrl = () => `${backendServer}/v1/categories`;
