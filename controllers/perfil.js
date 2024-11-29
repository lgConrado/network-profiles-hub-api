const PerfilServices = require("../services/perfil");

const getPerfis = async (_, res) => {
  try {
    const perfis = await PerfilServices.getPerfis()
    res.status(200).json(perfis);
  } catch (error) {
    error instanceof Error
      ? res.status(500).json({ error: error.message })
      : res.status(500).json({ error: "Erro desconhecido" });
  }
};

const selectPerfil = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const perfil = await PerfilServices.selectPerfil(id);

    if (!perfil) {
      return res.status(404).json({ message: "Registro não encontrado" });
    }
    res.status(200).json(perfil);
  } catch (error) {
    error instanceof Error
      ? res.status(500).json({ error: error.message })
      : res.status(500).json({ error: "Erro desconhecido" });
  }
};

const updatePerfil = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const resultado = await PerfilServices.updatePerfil(id, 
      req.body,
    );
    res.status(201).json(resultado);
  } catch (error) {
        res.status(500).json({ error });
  }
};

module.exports = {
  getPerfis,
  selectPerfil,
  updatePerfil,
};