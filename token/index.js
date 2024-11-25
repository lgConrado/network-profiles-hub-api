const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

const generateToken = (usuario) => {
  dotenv.config();

  return jwt.sign(
    { id: usuario.id, email: usuario.email },
    process.env.JWT_SECRET,
    { expiresIn: "12h" }
  );
};

module.exports = { generateToken };
