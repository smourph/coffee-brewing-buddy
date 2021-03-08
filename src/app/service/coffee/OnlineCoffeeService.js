import Hubdb from 'hubdb';
import config from '../../../config';

export default class OnlineCoffeeService {

  /**
   * hubdb configuration object
   *
   * @typedef {Object} HubdbConfiguration
   * @property {string} username - the user's name of the repository. this is not necessary the user that's logged in
   * @property {string} repo     - the repository name
   * @property {string} branch   - the branch of the repository to use as a database
   * @property {string} token    - a GitHub token. You'll need to get this by OAuth'ing into GitHub or use an applicaton token
   */

  constructor() {
    /** @type {HubdbConfiguration} */
    const options = config.hubdb;
    this.db = new Hubdb(options);
  }

  findAll() {
    return new Promise((resolve, reject) =>
      this.db.list((error, response) => {
        if (error) {
          return reject(error);
        }
        resolve(response);
      })
    );
  }
}
