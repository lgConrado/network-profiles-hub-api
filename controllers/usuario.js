const UsuarioServices = require("../services/usuario");

const insertUsuario = async (req, res) => {
  try {
    const resultado = await UsuarioServices.insertUsuario(req.body);
    res.status(201).json(resultado);
  } catch (error) {
    error instanceof Error
      ? res.status(500).json({ error: error.message })
      : res.status(500).json({ error: "Erro desconhecido" });
  }
};

const getUsuarios = async (_, res) => {
  try {
    const bancos = await UsuarioServices.getUsuarios();
    res.status(200).json(bancos);
  } catch (error) {
    error instanceof Error
      ? res.status(500).json({ error: error.message })
      : res.status(500).json({ error: "Erro desconhecido" });
  }
};

const selectUsuario = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const usuario = await UsuarioServices.selectUsuario(id);
    if (!usuario) {
      return res.status(404).json({ message: "Registro não encontrado" });
    }
    res.status(200).json(usuario);
  } catch (error) {
    error instanceof Error
      ? res.status(500).json({ error: error.message })
      : res.status(500).json({ error: "Erro desconhecido" });
  }
};

const updateUsuario = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const resultado = await UsuarioServices.updateUsuario(id, req.body);
    res.status(201).json(resultado);
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  insertUsuario,
  getUsuarios,
  selectUsuario,
  updateUsuario,
};
