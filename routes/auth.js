import express from "express";
import verifyToken from "../token/verify-token";

const router = express.Router();
const AuthController = require("../controllers/auth");

router.post("/auth", AuthController.auth);
router.post("/token", verifyToken);

module.exports = router;
