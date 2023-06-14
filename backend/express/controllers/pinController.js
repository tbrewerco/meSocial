import models from '../models/index.js';

const Pin = models.Pin;

const getPin = async (req, res, next) => {
    try {
        const pinId = req.params.id;
        const pin = await Pin.findOneById(pinId);
        res.status(200).send(pin)
    } catch (error) {
        console.error(error);
        next(error);
    };
};

export default { getPin };