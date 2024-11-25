const AuthService = require("../services/auth");

const auth = async (req, res)=> {
  try {
    const resultado = await AuthService.auth(req.body);
    res.status(201).json(resultado);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

module.exports = {
  auth,
};