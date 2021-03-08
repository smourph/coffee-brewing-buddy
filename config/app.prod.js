const config = {
  // General configs
  titlePrefix: null,
  online: true,

  // hubdb configuration object (@see https://github.com/mapbox/hubdb)
  hubdb: {
    username: 'smourph',
    repo: 'coffee-brewing-buddy',
    branch: 'data',
    token: process.env.REACT_APP_GITHUB_PERSONNAL_ACCESS_TOKEN
  }
};

module.exports = config;
