import jwt from 'jsonwebtoken';
import { OAuth2Client } from 'google-auth-library';
import models from '../models/index.js';
import validator from 'validator';

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const User = models.User;

const googleSignIn = async (req, res, next) => {
    const { id_token } = req.body;

    try {
        const ticket = await client.verifyIdToken({
            idToken: id_token,
            audience: process.env.GOOGLE_CLIENT_ID
        });

        const payload = ticket.getPayload();
        const user = await User.findOrCreateFromGoogleId(payload);

        const token = jwt.sign(
            {
                id: user.id,
                email: user.email,
                username: user.username
            },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(200).json({ token });
    } catch (error) {
        next(error);
    };
};

const register = async (req, res, next) => {
    try {
        const { username, password, email } = req.body;

        console.log(username, password, email);

        if (!validator.isEmail(email)) res.status(400).json({ error: 'Invalid email format' });
        if (!validator.isAlphanumeric(username)) res.status(400).json({ error: 'Username can only contain letters and numbers' });
        if (validator.isEmpty(password)) res.status(400).json({ error: 'Password cannot be empty' });

        const [user, created] = await User.findOrCreate({
            where: { email },
            defaults: { username, password }
        });

        if (!created) res.status(409).json({ error: 'A user with that email already exists' });

        const token = jwt.sign(
            {
                id: user.id,
                email: user.email,
                username: user.username
            },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

    } catch (error) {
        console.log(error);
        next(error);
    };
};

export default { googleSignIn, register };