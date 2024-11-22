const ProjetoRepository = require("../repositories/projeto");

const insertProjeto = async (req) => {
  const projeto = {
    usuarioId: req.usuarioId,
    titulo: req.titulo,
    fotoCapa: req.fotoCapa,
    hospedagem: req.hospedagem,
    prototipo: req.prototipo,
    design: req.design,
    aplicacao: req.aplicacao,
    descricao: req.descricao,
    tecnologias: req.tecnologias,
  };
  return await ProjetoRepository.insertProjeto(projeto);
};

const getProjetos = async () => {
  const projetos = await ProjetoRepository.getProjetos();
  return projetos;
};

const selectProjeto = async (id) => {
  const projeto = await ProjetoRepository.selectProjeto(id);
  return projeto;
};

const updateProjeto = async (id, req) => {
  const projeto = {
    usuarioId: req.usuarioId,
    titulo: req.titulo,
    fotoCapa: req.fotoCapa,
    hospedagem: req.hospedagem,
    prototipo: req.prototipo,
    design: req.design,
    aplicacao: req.aplicacao,
    descricao: req.descricao,
    tecnologias: req.tecnologias,
  };
  return await ProjetoRepository.updateProjeto(id, projeto);
};

const deleteProjeto = async (id) => {
  const projeto = await ProjetoRepository.deleteProjeto(id);
  return projeto;
};

module.exports = {
  insertProjeto,
  getProjetos,
  selectProjeto,
  updateProjeto,
  deleteProjeto,
};
