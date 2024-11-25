const express = require("express");
const router = express.Router();
const PerfilController = require("../controllers/perfil");

router.get("/perfis", PerfilController.getPerfis);
router.get("/perfis/:id", PerfilController.selectPerfil);
router.put("/perfis/:id", PerfilController.updatePerfil);

module.exports = router;
