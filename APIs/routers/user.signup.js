import express from "express"
const router = express.Router();
import {userSignin} from "../controlers/user.auth.js"

router.post("/sign-up",userSignin)

export default router;