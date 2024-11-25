const db = require("../database");

const getPerfils = async (res) => {
  try {
    const query = `SELECT usuario_perfil.id, usuarios.nome AS "Nome", usuario_perfil.foto AS "Foto", usuario_perfil.area_atuacao AS "Area de atuação", usuario_perfil.biografia AS "Biografia", usuario_perfil.linkedin AS "Linkedin", usuario_perfil.behance AS "Behance", usuario_perfil.figma AS "Figma", usuario_perfil.discord AS "Discord", usuario_perfil.github AS "Github", usuario_perfil.skills AS "Skills" FROM public.usuario_perfil JOIN public.usuarios ON usuario_perfil.usuario_id = usuarios.id ORDER BY nome ASC;`;
    const { rows } = await db.query(query);

    return rows;
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).json({ error });
    throw Error;
  }
};

const selectPerfil = async (id, res) => {
  try {
    const query = `SELECT usuario_perfil.id, usuarios.nome AS "Nome", usuario_perfil.foto AS "Foto", usuario_perfil.area_atuacao AS "Area de atuação", usuario_perfil.biografia AS "Biografia", usuario_perfil.linkedin AS "Linkedin", usuario_perfil.behance AS "Behance", usuario_perfil.figma AS "Figma", usuario_perfil.discord AS "Discord", usuario_perfil.github AS "Github", usuario_perfil.skills AS "Skills" FROM public.usuario_perfil JOIN public.usuarios ON usuario_perfil.usuario_id = usuarios.id WHERE id = $1 ORDER BY nome ASC;`;
    const values = [id];
    const { rows } = await db.query(query, values);

    return rows[0];
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).json({ error });
    throw Error;
  }
};

const updatePerfil = async (id, req, res) => {
  const perfil = req;
  let query, values, item;
  console.log(perfil)

  try {
    query = `UPDATE public.usuario_perfil SET foto = $1, area_atuacao = $2, biografia = $3, linkedin = $4, behance = $5, figma = $6, discord = $7, github = $8, skills = $9 WHERE id = $10 RETURNING *`;
    values = [
      perfil.foto,
      perfil.areaAtuacao,
      perfil.biografia,
      perfil.linkedin,
      perfil.behance,
      perfil.figma,
      perfil.discord,
      perfil.github,
      perfil.skills,
      id,
    ];

    item = await db.query(query, values);

    return item.rows;
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).json({ error });
    throw Error;
  }
};

module.exports = {
  getPerfils,
  selectPerfil,
  updatePerfil,
};
