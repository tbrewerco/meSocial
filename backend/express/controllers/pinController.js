import models from '../models/index.js';

const Pin = models.Pin;

const createPin = async (req, res, next) => {
    try {
        const newPin = req.body;
        const createdPin = await Pin.create(newPin);
        res.status(201).json(createdPin);
    } catch (error) {
        console.error(error);
        next(error);
    }
};

const getPin = async (req, res, next) => {
    try {
        const pinId = req.params.id;
        const pin = await Pin.findOneById(pinId);
        res.status(200).json(pin)
    } catch (error) {
        console.error(error);
        next(error);
    };
};



const updatePin = async (req, res, next) => {
    try {
        const pinId = req.params.id;
        const updates = req.body;
        await Pin.update(updates, { where: { id: pinId } });
        const updatedPin = await Pin.findOneById(pinId);
        res.status(200).json(updatedPin);
    } catch (error) {
        console.error(error);
        next(error);
    }
};


const deletePin = async (req, res, next) => {
    try {
        const pinId = req.params.id;
        await Pin.destroy({ where: { id: pinId } });
        res.status(204).send();
    } catch (error) {
        console.error(error);
        next(error);
    }
};

const searchPins = async (req, res, next) => {
    try {
        const searchQuery = req.query;
        const pins = await Pin.searchPins(searchQuery);
        res.status(200).send(pins);
    } catch (error) {
        console.error(error);
        next(error);
    };
};

export default { createPin, getPin, updatePin, deletePin, searchPins };