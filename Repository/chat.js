import SQ from 'sequelize';
import { sequelize } from '../database/database.js';
import { User } from './auth.js';
const DataTypes = SQ.DataTypes;

export const Chat = sequelize.define(
    'chats',
    {
      chatID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      text: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      userID: {
        type: DataTypes.STRING(8),
        allowNull: false,
      },
      chatTime: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date()
      },
      isDelete: {
          type: DataTypes.STRING(1),
          allowNull: false,
          defaultValue: false
      }
    },
  );

Chat.belongsTo(User, {foreignKey: 'userID'});
//! ========================== CRUD START==========================//

//새로운 user 만들기
export async function createChat(chatData){
    const {text, userID} = chatData;

    return Chat.create({ text, userID }) //
    .then((data) => {
        return data.dataValues.chatID
    });
}

// delete chat
export async function deleteChat(chatID){
    return Chat.findByPk(chatID)
               .then((chat) => chat.destroy());
}


//! ========================== CRUD END==========================//
// 모든 채팅 가져오기
export async function getAllChat(){
  return Chat.findAll()
             .then();
}

// 나의 채팅 가져오기
export async function getMyChat(userID) {
  return Chat.findAll({ where: {userID}})
}

// chatId로 찾아오기
export async function getById(chatID){
  return Chat.findByPk(chatID);
}