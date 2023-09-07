import db from './index.html';
class Chatroom{
    constructor(room, username){
        this.room = room;
        this.username = username;
        this.chat = db.collection('chats')
    }
}

const chatroom = new Chatroom('gaming', 'Nancy');
console.log(chatroom)