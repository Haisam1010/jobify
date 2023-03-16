import express from 'express'
import {Register,Login,Update} from '../controllers/authController.js'
const router = express.Router()

router.route('/register').post(Register)
router.route('/login').post(Login)
router.route('/updateUser').patch(Update)

export default router