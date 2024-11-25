const AuthRepository = require("../auth");

const auth = async (req) => {
  const usuario = { email: req.email, senha: req.senha };
  return await AuthRepository.auth(usuario);
};

module.exports = {
  auth,
};
