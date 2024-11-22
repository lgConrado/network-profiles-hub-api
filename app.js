const dotenv = require("dotenv");

const express = require("express");
const cors = require("cors");
const app = express();

const usuarioRoutes = require("./routes/usuario");
const projetoRoutes = require("./routes/projeto");

dotenv.config();

app.use(cors());

app.use(express.json());

app.use("/api", usuarioRoutes, projetoRoutes);

const PORT = process.env.API_PORT;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
