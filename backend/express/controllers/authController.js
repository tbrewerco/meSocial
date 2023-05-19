import jwt from 'jsonwebtoken';
import { OAuth2Client } from 'google-auth-library';
import models from '../models/index.js';

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const User = models.User;

const googleSignIn = async (req, res, next) => {
    const { id_token } = req.body;

    try {
        const ticket = await client.verifyIdTokenAsync({
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
    }
};

const thisThing = 'that';

export default { googleSignIn, thisThing }; 