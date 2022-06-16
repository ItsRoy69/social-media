import express from 'express';
import { loginUser, registerUser } from '../controllers/AuthController.js';

const router = express.Router()

router.get('/', (req, res) => {res.send('Route Working')})


router.post('/register', registerUser)
router.post('/login', loginUser)

export default router