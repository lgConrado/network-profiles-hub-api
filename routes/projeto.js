const express = require("express");
const router = express.Router();
const ProjetoController = require("../controllers/projeto");

router.post("/projetos", ProjetoController.insertProjeto);
router.get("/projetos", ProjetoController.getProjetos);
router.get("/projetos/:id", ProjetoController.selectProjeto);
router.put("/projetos/:id", ProjetoController.updateProjeto);
router.delete("/projetos/:id", ProjetoController.deleteProjeto);

module.exports = router;
