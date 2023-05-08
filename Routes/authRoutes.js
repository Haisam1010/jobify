import express from 'express'
import { Register,Login,Update,Delete } from "../controllers/auth.js";
import authUser from '../middleware/auth.js';

const router = express.Router()

router.route('/register').post(Register)
router.route('/login').post(Login)
router.route('/update').patch(authUser,Update)
router.delete('/delete').patch(Delete)

export default router

