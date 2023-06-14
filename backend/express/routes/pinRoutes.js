import express from 'express';
import pinController from '../controllers/pinController.js';

const router = express.Router();

router.get('/:id', pinController.getPin);

export default router;