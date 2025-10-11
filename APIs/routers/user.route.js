import express from 'express'
import { Test } from '../controlers/user.controler.js';
const router = express.Router();
router.get("/test",Test)

export default router