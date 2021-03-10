const config = {
  // General configuration
  titlePrefix: '[DEV] ',
  online: true,

  // Github OAuth App configuration
  // @see https://docs.github.com/en/developers/apps/authorizing-oauth-apps
  githubOAuth: {
    clientId: process.env.REACT_APP_GITHUB_OAUTH_CLIENT_ID,
    clientSecret: process.env.REACT_APP_GITHUB_OAUTH_CLIENT_SECRET,
    redirectUriFragment: process.env.REACT_APP_GITHUB_OAUTH_REDIRECT_URI,
  },
};

module.exports = config;
