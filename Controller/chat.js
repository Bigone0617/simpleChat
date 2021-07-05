import * as chatRepository from '../Repository/chat.js';

// create chat
export async function createChat(req, res) {
    const newChat = await chatRepository.createChat(req.body);
    res.status(201).json(newChat);
};

// delete chat
export async function deleteChat(req, res) {
    const {chatID} = req.body;
    await chatRepository.deleteChat(chatID)
    res.sendStatus(204);
};

//get all chat
export async function getAllChat(req, res) {
    const chats = await chatRepository.getAllChat();
    res.status(200).json({chats});
};

//get my chat
export async function getMyChat(req, res) {
    const {userID} = req.body;
    const chats = await chatRepository.getMyChat(userID);

    res.status(200).json({chats});
};