import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import sequelize from './index.js';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.json({ message: "meSocial v1" });
});

export default app;