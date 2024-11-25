const dotenv = require("dotenv");

const express = require("express");
const cors = require("cors");
const app = express();
const { authToken } = require("./middleware/index");

const authRoutes = require("./routes/auth");
const usuarioRoutes = require("./routes/usuario");
const projetoRoutes = require("./routes/projeto");
const perfilRoutes = require("./routes/perfil");

dotenv.config();

app.use(cors());

app.use(express.json());

app.use("/api", authRoutes);
app.use("/api", usuarioRoutes);

app.use("/api", authToken, projetoRoutes);
app.use("/api", authToken, perfilRoutes);

const PORT = process.env.API_PORT;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
