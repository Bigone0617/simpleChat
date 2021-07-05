// global import
import express from 'express';
import 'express-async-errors';

// local import
import authRouter from './Router/auth.js';

const app = express();

app.use(express.json());

app.use('/auth', authRouter);

app.use((error, req, res, next) => {
    console.error(error);
    res.sendStatus(500);
});

app.listen(8080, function(){
    console.log('connection!');
});