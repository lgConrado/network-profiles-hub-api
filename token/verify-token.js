const dotenv = require("dotenv");

const { verify } = require("jsonwebtoken");

const UsuarioRepository = require("../repositories/usuario");

const verifyToken = async (req, res) => {
  dotenv.config();

  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).send("Access token nao informado");
  }

  const [, accessToken] = token.split(" ");

  try {
    const valid = verify(accessToken, process.env.JWT_SECRET);

    const usuarios = await UsuarioRepository.selectUsuario(valid.id);
    const user = {
      email: usuarios["E-mail"],
    };

    res.status(200).send({ valid: true, user });
  } catch (error) {
    res.status(401).send({ valid: false });
  }
};

module.exports = { verifyToken };
