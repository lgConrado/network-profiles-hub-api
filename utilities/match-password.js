import bcrypt from "bcrypt";

const MatchPassword = (password, dbPassword) => {
  return bcrypt.compareSync(password, dbPassword);
};

export default MatchPassword;