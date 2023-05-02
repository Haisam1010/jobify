import express from 'express'
import { Register,Login,Update,Delete } from "../controllers/auth.js";

const router = express.Router()

router.route('/register').post(Register)
router.route('/login').post(Login)
router.route('/update').patch(Update)
router.delete('/delete').patch(Delete)

export default router

