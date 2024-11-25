const express = require("express");
const { verifyToken } = require("../token/verify-token");

const router = express.Router();
const AuthController = require("../controllers/auth");

router.post("/login", AuthController.auth);
router.post("/token", verifyToken);

module.exports = router;
