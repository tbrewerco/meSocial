import models from '../models/index.js';
import generateSignedUrl from '../utils/generateSignedUrl.js';

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
        const pin = await Pin.getPinById(pinId);

        const signedImageUrl = await generateSignedUrl('mesocialpinphotos', pin.image);

        const pinResponse = {
            ...pin,
            image: signedImageUrl
        }

        res.status(200).json(pinResponse)
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

        const pinsWithSignedUrls = await Promise.all(
            pins.map(async (pin) => {
                const signedImageUrl = await generateSignedUrl('mesocialpinphotos', pin.image);
                return { ...pin, image: signedImageUrl }
            })
        );

        res.status(200).json(pinsWithSignedUrls);
    } catch (error) {
        console.error(error);
        next(error);
    };
};

export default { createPin, getPin, updatePin, deletePin, searchPins };