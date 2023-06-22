import express from 'express';
import likeController from '../controllers/likeController.js';

const router = express.Router();

router.get('/:userId/:pinId', likeController.checkLike);
router.post('/', likeController.createLike);
router.delete('/:userId/:pinId', likeController.unlikeLike);

export default router;