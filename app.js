// global import
import express from 'express';
import 'express-async-errors';
import { config } from './config.js';
import { sequelize } from './database/database.js';

// local import
import authRouter from './Router/auth.js';

const app = express();

app.use(express.json());

app.use('/auth', authRouter);

app.use((error, req, res, next) => {
    console.error(error);
    res.sendStatus(500);
});

sequelize.sync().then((client) => {
    app.listen(config.host.port);
});


//initSocket(server);