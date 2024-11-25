const PerfilRepository = require("../repositories/perfil");

const getPerfis = async () => {
  const perfis = await PerfilRepository.getPerfils();
  return perfis;
};

const selectPerfil = async (id) => {
  const perfil = await PerfilRepository.selectPerfil(id);
  return perfil;
};

const updatePerfil = async (id, req) => {
  const perfil = {
    foto: req.foto,
    areaAtuacao: req.areaAtuacao,
    biografia: req.biografia,
    linkedin: req.linkedin,
    behance: req.behance,
    figma: req.figma,
    discord: req.discord,
    github: req.github,
    skills: req.skills,
  };
  return await PerfilRepository.updatePerfil(id, perfil);
};

module.exports = {
  getPerfis,
  selectPerfil,
  updatePerfil,
};
