import models from '../models/index.js';

const User = models.User;

const getUser = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const user = await User.findOneById(userId);
        res.status(200).send(user)
    } catch (error) {
        console.error(error);
        next(error);
    };
};

export default { getUser };