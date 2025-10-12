import express from "express"
const router = express.Router();
import Signin from "../controlers/user.signup.js"

router.post("/signin",Signin)

export default router;