// global import
import express from 'express';
import 'express-async-errors';

// local import
import * as chatController from '../Controller/chat.js';
import { isAuth } from '../middleware/auth.js';

const router = express.Router();

// create chat
router.post('/createChat', isAuth, chatController.createChat);
// delete chat
router.delete('/deleteChat', isAuth, chatController.deleteChat);
// get All chat
router.get('/getAllChat', isAuth, chatController.getAllChat);
// get my chat
router.get('/getMyChat', isAuth, chatController.getMyChat);


export default router;
