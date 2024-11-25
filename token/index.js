import jwt from "jsonwebtoken";
import dotenv from "dotenv";

const generateToken = (usuario) => {
  dotenv.config();

  return jwt.sign(
    { id: usuario.id, usuario: usuario.email, nome: usuario.nome },
    process.env.JWT_SECRET,
    { expiresIn: "12h" }
  );
};

export default generateToken;
