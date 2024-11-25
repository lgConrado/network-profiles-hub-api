const db = require("../database");
const { generateToken } = require("../token");
const { MatchPassword } = require("../utilities/match-password");

const auth = async (req) => {
  const usuario = req;
  console.log("Payload: ", usuario);

  try {
    const result = await db.query(
      `SELECT usuarios.id, usuarios.email, usuarios.nome, usuarios.senha
    FROM public.usuarios WHERE usuarios.email = $1`,
      [usuario.email]
    );

    const userDb = result.rows[0];

    if (result.rows.length === 0) {
      throw new Error("Usuário não encontrado");
    }

    const passwordMatch = MatchPassword(usuario.senha, userDb.senha);

    if (!passwordMatch) {
      throw Error("Senha incorreta");
    }

    const token = generateToken(userDb);
    console.log("Token gerado:", token);

    delete userDb.senha;

    return { token, userDb };
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  auth,
};
