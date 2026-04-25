export const rootPaths = {
  root: '/',
  pagesRoot: 'pages',
  authRoot: 'authentication',
};

export default {
  dashboard: `${rootPaths.root}`,
  seasons: `/${rootPaths.pagesRoot}/seasons`,
  categories: `/${rootPaths.pagesRoot}/categories`,
  organizations: `/${rootPaths.pagesRoot}/organizations`,
  signin: `/${rootPaths.authRoot}/sign-in`,
  signup: `/${rootPaths.authRoot}/sign-up`,
};
