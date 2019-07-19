const gigs = require('../mongooseModels/gigs');
const { GetCurrentFormattedDate } = require('../utils/date.js');

class Gig {
  static all() {
    return gigs;
  }

  static upcoming() {
    return gigs.filter(g => g.formattedDate > GetCurrentFormattedDate());
  }
}

module.exports = {
  Gig,
};
