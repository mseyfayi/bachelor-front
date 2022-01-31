const backendServer = 'http://api.koooleposhti.ir/api';

const getQueriedUrl = (url: string, parameters: { [key: string]: unknown }): string => {
  const getDelimiter = (currentUrl: string) => (currentUrl.includes('?') ? '&' : '?');
  const addArrayParameterToUrl = (baseurl: string, parameterName: string, parameter: Array<string>) =>
    parameter.reduce(
      (arrayQueriedUrl, item) =>
        item ? `${arrayQueriedUrl}${getDelimiter(arrayQueriedUrl)}${parameterName}=${item}` : arrayQueriedUrl,
      baseurl,
    );

  return Object.keys(parameters).reduce((queriedUrl, parameter) => {
    if (parameters[parameter]) {
      return Array.isArray(parameters[parameter])
        ? addArrayParameterToUrl(queriedUrl, parameter, parameters[parameter] as Array<string>)
        : `${queriedUrl}${getDelimiter(queriedUrl)}${parameter}=${parameters[parameter]}`;
    }
    return queriedUrl;
  }, url);
};

export const getGetPostsUrl = (tagIds: Array<string>, page = 1, limit = 10) =>
  getQueriedUrl(`${backendServer}/v1/posts`, { page, limit, tags: tagIds });
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
export const getGetUserUrl = () => `${backendServer}/v1/user`;
