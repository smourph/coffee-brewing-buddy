const config = {
  // General configuration
  titlePrefix: null,
  online: true,

  // Github OAuth App configuration
  // @see https://docs.github.com/en/developers/apps/authorizing-oauth-apps
  githubOAuth: {
    username: 'smourph',
    repo: 'coffee-brewing-buddy',
    branch: 'data',
    token: process.env.REACT_APP_GITHUB_PERSONNAL_ACCESS_TOKEN,
  },
};

module.exports = config;
