const bcrypt = require("bcrypt");

const MatchPassword = (password, dbPassword) => {
  return bcrypt.compareSync(password, dbPassword);
};

module.exports = { MatchPassword };
