import SQ from 'sequelize';
import { sequelize } from '../database/database.js';
import { User } from './auth.js';
const DataTypes = SQ.DataTypes;
const Sequelize = SQ.Sequelize;

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

const INCLUDE_USER = {
    attributes: [
        'chatID',
        'text',
        'chatTime',
        'userID',
        'isDelete',
        [Sequelize.col('user.userName'), 'userName'],
        [Sequelize.col('user.url'), 'url'],
    ],
    include: {
        model: User,
        attributes: [],
    },
};
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