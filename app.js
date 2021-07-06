// global import
import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';


// local import
import authRouter from './Router/auth.js';
import chatRouter from './Router/chat.js';
import { config } from './config.js';
import { sequelize } from './database/database.js';
import { initSocket } from './connection/socket.js';

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));

app.use('/auth', authRouter);
app.use('/chat', chatRouter);

app.use((error, req, res, next) => {
    console.error(error);
    res.sendStatus(500);
});

sequelize.sync().then(() => {
    const server = app.listen(config.host.port);
    initSocket(server);
});