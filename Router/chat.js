// global import
import express from 'express';

// local import
import * as chatController from '../Controller/chat.js';

const router = express.Router();

// create chat
router.post('/createChat', chatController.createChat);
// delete chat
router.delete('/deleteChat', chatController.deleteChat);
// get All chat
router.get('/getAllChat', chatController.getAllChat);
// get my chat
router.get('/getMyChat', chatController.getMyChat);


export default router;
