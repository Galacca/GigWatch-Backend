const { users } = require('../data');

class User {
  static all() {
    return users;
  }
}

module.exports = {
  User,
};
