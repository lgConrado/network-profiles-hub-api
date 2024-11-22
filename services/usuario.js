const UsuarioRepository = require("../repositories/usuario");

const insertUsuario = async (req) => {
  const usuario = { nome: req.nome, email: req.email, senha: req.senha };

  return await UsuarioRepository.insertUsuario(usuario);
};

const getUsuarios = async () => {
  const usuarios = await UsuarioRepository.getUsuarios();
  return usuarios;
};

const selectUsuario = async (id) => {
  const usuario = await UsuarioRepository.selectUsuario(id);
  return usuario;
};

const updateUsuario = async (id, req) => {
  const usuario = { nome: req.nome, email: req.email, senha: req.senha };
  return await UsuarioRepository.updateUsuario(id, usuario);
};

module.exports = {
  insertUsuario,
  getUsuarios,
  selectUsuario,
  updateUsuario,
};
