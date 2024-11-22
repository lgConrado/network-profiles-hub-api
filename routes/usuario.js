const express = require("express");

const router = express.Router();
const UsuarioController = require("../controllers/usuario");

router.post("/usuarios", UsuarioController.insertUsuario);
router.get("/usuarios", UsuarioController.getUsuarios);
router.get("/usuarios/:id", UsuarioController.selectUsuario);
router.put("/usuarios/:id", UsuarioController.updateUsuario);

module.exports = router;
