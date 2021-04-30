const config = {
  // General configuration
  titlePrefix: '[DEV] ',
  online: true,

  // Github OAuth App configuration
  // @see https://docs.github.com/en/developers/apps/authorizing-oauth-apps
  githubOAuth: {
    awsLambdaUri: 'https://a96pejqcc7.execute-api.eu-west-3.amazonaws.com/oauth/github/login',
    api: 'CoffeeBrewingBuddy_dev',
    scope: 'user,gist',
  },
};

module.exports = config;
