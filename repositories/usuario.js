const db = require ("../database");

const insertUsuario = async (req, res) => {
  const usuario = req;
  let query, values, item;

  try {
    query = `INSERT INTO public.usuarios (nome, email, senha) VALUES ($1, $2, $3) RETURNING *;`;
    values = [usuario.nome, usuario.email, usuario.senha];
    item = await db.query(query, values);

    return item.rows;
  } catch (error) {
    console.error("Error: ", error.detail);
    item.rows[0]
      ? await db.query(`DELETE FROM public.usuarios WHERE id = $1;`, [
          item.rows[0].id,
        ])
      : null;
    res.status(500).json({ error });
    throw Error;
  }
};

const getUsuarios = async (res) => {
  try {
    const query = `SELECT usuarios.id, usuarios.nome AS "Nome", usuarios.email AS "E-mail", usuarios.senha AS "Senha" FROM public.usuarios ORDER BY nome ASC;`;
    const { rows } = await db.query(query);

    return rows;
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).json({ error });
    throw Error;
  }
};

const selectUsuario = async (id, res) => {
  try {
    const query = `SELECT usuarios.id,usuarios.nome AS "Nome", usuarios.email AS "E-mail", usuarios.senha AS "Senha" FROM public.usuarios WHERE id = $1 ORDER BY nome ASC;`;
    const values = [id];
    const { rows } = await db.query(query, values);

    return rows[0];
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).json({ error });
    throw Error;
  }
};

const updateUsuario = async (id, req, res) => {
  const usuario = req;
  let query, values, item;

  try {
    query = `UPDATE public.usuarios SET nome = $1, email = $2 WHERE id = $3 RETURNING *`;
    values = [usuario.nome, usuario.email, id];

    item = await db.query(query, values);

    return item.rows;
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).json({ error });
    throw Error;
  }
};

module.exports = {
  insertUsuario,
  getUsuarios,
  selectUsuario,
  updateUsuario,
};
