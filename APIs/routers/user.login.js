import express from "express"
import { Login } from "../controlers/user.auth.js";

const router = express.Router();

router.post("/login",Login)

export default router;
