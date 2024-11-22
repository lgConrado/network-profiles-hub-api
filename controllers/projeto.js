const ProjetoServices = require("../services/projeto");

const insertProjeto = async (req, res) => {
  try {
    const resultado = await ProjetoServices.insertProjeto(
      req.body,
    );
    res.status(201).json(resultado);
  } catch (error) {
    error instanceof Error
      ? res.status(500).json({ error: error.message })
      : res.status(500).json({ error: "Erro desconhecido" });
  }
};

const getProjetos = async (_, res) => {
  try {
    const bancos = await ProjetoServices.getProjetos();
    res.status(200).json(bancos);
  } catch (error) {
    error instanceof Error
      ? res.status(500).json({ error: error.message })
      : res.status(500).json({ error: "Erro desconhecido" });
  }
};

const selectProjeto = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const projeto = await ProjetoServices.selectProjeto(id);
    if (!projeto) {
      return res.status(404).json({ message: "Registro não encontrado" });
    }
    res.status(200).json(usuario);
  } catch (error) {
    error instanceof Error
      ? res.status(500).json({ error: error.message })
      : res.status(500).json({ error: "Erro desconhecido" });
  }
};

const updateProjeto = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const resultado = await ProjetoServices.updateProjeto(id, 
      req.body,
    );
    res.status(201).json(resultado);
  } catch (error) {
        res.status(500).json({ error });
  }
};

const deleteProjeto = async ( req, res) => {
  const id = parseInt(req.params.id);
  try {
    const deleted = await ProjetoServices.deleteProjeto(
      id
    );
    if (deleted === false) {
      return res.status(404).json({ message: "Registro não encontrado" });
    }
    res.status(200).json(deleted);
  } catch (error) {
    error instanceof Error
      ? res.status(500).json({ error: error.message })
      : res.status(500).json({ error: "Erro desconhecido" });
  }
};

module.exports = {
  insertProjeto,
  getProjetos,
  selectProjeto,
  updateProjeto,
  deleteProjeto,
};