import models from '../models/index.js';

const Like = models.Like;

const checkLike = async (req, res, next) => {
    try {
        const userId = req.params.userId;
        const pinId = req.params.pinId;
        const like = await Like.checkLike(userId, pinId);
        res.status(200).send(!!like)
    } catch (error) {
        console.error(error);
        next(error);
    };
};

const createLike = async (req, res, next) => {
    try {
        const userId = req.body.userId;
        const pinId = req.body.pinId;
        const like = await Like.createLike(userId, pinId);
        res.status(200).send(like);
    } catch (error) {
        console.error(error);
        next(error);
    };
};

const unlikeLike = async (req, res, next) => {
    try {
        const userId = req.params.userId;
        const pinId = req.params.pinId;
        const unlikePost = Like.unlike(userId, pinId);
        res.status(200).send(unlikePost);
    } catch (error) {
        console.error(error);
        next(error);
    };
};

export default { checkLike, createLike, unlikeLike };