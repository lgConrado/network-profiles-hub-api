const db = require("../database");

const insertProjeto = async (req, res) => {
  const projeto = req;
  let query, values, item;

  try {
    query = `INSERT INTO public.usuario_projetos (usuario_id, titulo, foto_capa, hospedagem, prototipo, design, aplicacao, descricao, tecnologias) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *;`;
    values = [
      projeto.usuarioId,
      projeto.titulo,
      projeto.fotoCapa,
      projeto.hospedagem,
      projeto.prototipo,
      projeto.design,
      projeto.aplicacao,
      projeto.descricao,
      projeto.tecnologias,
    ];
    item = await db.query(query, values);

    return item.rows;
  } catch (error) {
    console.error("Error: ", error.detail);
    item.rows[0]
      ? await db.query(`DELETE FROM public.usuario_projetos WHERE id = $1;`, [
          item.rows[0].id,
        ])
      : null;
    res.status(500).json({ error });
    throw Error;
  }
};

const getProjetos = async (res) => {
  try {
    const query = `SELECT usuario_projetos.id, usuarios.nome AS "Nome", usuario_projetos.titulo AS "Titulo", usuario_projetos.foto_capa AS "Foto Capa", usuario_projetos.hospedagem AS "Hospedagem", usuario_projetos.prototipo AS "Protótipo", usuario_projetos.design AS "Design", usuario_projetos.aplicacao AS "Aplicação", usuario_projetos.descricao AS "Descrição", usuario_projetos.tecnologias AS "Tecnologias" FROM public.usuario_projetos JOIN public.usuarios ON usuario_projetos.usuario_id = usuarios.id ORDER BY nome ASC;`;
    const { rows } = await db.query(query);

    return rows;
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).json({ error });
    throw Error;
  }
};

const selectProjeto = async (id, res) => {
  try {
    const query = `SELECT usuario_projetos.id, usuarios.nome AS "Nome", usuario_projetos.titulo AS "Titulo", usuario_projetos.foto_capa AS "Foto Capa", usuario_projetos.hospedagem AS "Hospedagem", usuario_projetos.prototipo AS "Protótipo", usuario_projetos.design AS "Design", usuario_projetos.aplicacao AS "Aplicação", usuario_projetos.descricao AS "Descrição", usuario_projetos.tecnologias AS "Tecnologias" FROM public.usuario_projetos JOIN public.usuarios ON usuario_projetos.usuario_id = usuarios.id WHERE id = $1 ORDER BY nome ASC;`;
    const values = [id];
    const { rows } = await db.query(query, values);

    return rows[0];
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).json({ error });
    throw Error;
  }
};

const updateProjeto = async (id, req, res) => {
  const projeto = req;
  let query, values, item;
  console.log(projeto)

  try {
    query = `UPDATE public.usuario_projetos SET titulo = $1, foto_capa = $2, hospedagem = $3, prototipo = $4, design = $5, aplicacao = $6, descricao = $7, tecnologias = $8 WHERE id = $9 RETURNING *`;
    values = [
      projeto.titulo,
      projeto.fotoCapa,
      projeto.hospedagem,
      projeto.prototipo,
      projeto.design,
      projeto.aplicacao,
      projeto.descricao,
      projeto.tecnologias,
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

const deleteProjeto = async (id, res) => {
  let query, values;
  try {
    query = `DELETE FROM public.usuario_projetos WHERE usuario_projetos.id = $1`;
    values = [id];
    item = await db.query(query, values);

    return [item.rows, true];
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).json({ error });
    throw Error;
  }
};

module.exports = {
  insertProjeto,
  getProjetos,
  selectProjeto,
  updateProjeto,
  deleteProjeto,
};
