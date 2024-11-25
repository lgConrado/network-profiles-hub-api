const { verify, decode } = require("jsonwebtoken");

const authToken = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).send("Access token nao informado");
  }

  const [, accessToken] = token.split(" ");

  try {
    verify(accessToken, process.env.JWT_SECRET);

    const { id, email, nome } = await decode(accessToken);

    req.profileId = id;
    req.profileEmail = email;
    req.profileNome = nome;

    return next();
  } catch (error) {
    res.status(401).send("Usuario não autorizado");
  }
};

module.exports = { authToken };
