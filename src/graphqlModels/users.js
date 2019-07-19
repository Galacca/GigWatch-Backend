// const { users } = require('../data');
const users = require('../mongooseModels/users');

class User {
  static all() {
    return users;
  }
}

module.exports = {
  User,
};
