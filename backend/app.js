import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import sequelize from './models/index.js';

import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import pinRoutes from './routes/pinRoutes.js';
import likeRoutes from './routes/likeRoutes.js';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/pin', pinRoutes);
app.use('/api/like', likeRoutes);

app.get('/', (req, res) => {
    res.json({ message: "meSocial v1" });
});

export default app;