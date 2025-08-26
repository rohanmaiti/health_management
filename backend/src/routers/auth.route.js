import express from 'express';
import { handle_login } from '../controllers/auth.controller.js';
const router = express.Router();


router.post('/auth/login', handle_login);
router.post('/auth/signup', handle_signup);
router.post('/auth/check', check);