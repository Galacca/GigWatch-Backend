// This file contains various date functions we require
let moment = require('moment');

// Moment is a bit bugged atm so we need this
if ('default' in moment) {
  moment = moment.default;
}
// This is bugged as well and we need this line...
require('moment/locale/fi');

moment().locale('fi');

const GetCurrentDate = () => (moment().format('LLL'));
const GetCurrentFormattedDate = () => (moment().format('YYYYMMDD'));

module.exports = {
  GetCurrentDate, GetCurrentFormattedDate,
};
