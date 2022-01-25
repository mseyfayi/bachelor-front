const backendServer = 'http://api.koooleposhti.ir/api';

const getQueriedUrl = (url: string, parameters: { [key: string]: unknown }): string => {
  const getDelimiter = (currentUrl: string) => (currentUrl.includes('?') ? '&' : '?');
  return Object.keys(parameters).reduce(
    (queriedUrl, parameter) =>
      parameters[parameter] ? `${queriedUrl}${getDelimiter(queriedUrl)}${parameter}=${parameters[parameter]}` : queriedUrl,
    url,
  );
};

export const getGetPostsUrl = (page = 1, limit = 10) => getQueriedUrl(`${backendServer}/v1/posts`, { page, limit });
export const getGetPostDetailUrl = (postId: string) => `${backendServer}/v1/posts/${postId}`;
export const getPostPostsUrl = () => `${backendServer}/v1/posts`;
export const getLikePostUrl = (postId: string) => `${backendServer}/v1/posts/${postId}/like`;
export const getUnlikePostUrl = (postId: string) => `${backendServer}/v1/posts/${postId}/unlike`;
export const getGithubOGUrl = (repoAddress: string) => `${backendServer}/v1/og/${repoAddress}`;
export const getSignInUrl = () => `${backendServer}/v1/auth/signin`;
export const getSignUpUrl = () => `${backendServer}/v1/auth/signup`;
export const getForgetPasswordUrl = () => `${backendServer}/v1/auth/forgetPassword`;
export const getResetPasswordUrl = () => `${backendServer}/v1/auth/resetPassword`;
export const getConfirmCodeUrl = () => `${backendServer}/v1/auth/activate`;
export const getGetCategoriesUrl = () => `${backendServer}/v1/categories`;
export const getGetUserUrl = () => `${backendServer}/v1/user?jwt={{JWT_TOKEN}}`;
