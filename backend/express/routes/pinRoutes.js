import express from 'express';
import pinController from '../controllers/pinController.js';

const router = express.Router();

router.post('/', pinController.createPin);
router.get('/:id', pinController.getPin);
router.get('/', pinController.searchPins);
router.put('/:id', pinController.updatePin);
router.delete('/:id', pinController.deletePin);

export default router;