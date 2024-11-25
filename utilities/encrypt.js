import bcrypt from "bcrypt";

const Encrypt = (password) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  return hash;
};

export default Encrypt;
