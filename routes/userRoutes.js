import express from "express";
const router = express.Router();
import { userLogin, registerUser } from "./controllers/userController";

router.route("/register", registerUser);
router.route("/login", userLogin);

export default router;
