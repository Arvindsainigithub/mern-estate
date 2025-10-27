import express from "express"
const router = express.Router();
import {userSignin,google} from "../controlers/user.auth.js"

router.post("/sign-up",userSignin)
router.post("/google",google)

export default router;