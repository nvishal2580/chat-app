const express = require('express');
const app = express();
const server = app.listen(5000, () => console.log('on port : 5000'));
const io = require('socket.io')(server);
const cors = require('cors');
const { addUser, getUserByroomName, getUser, removeUser } = require('./users');
app.use(cors());

const port = process.env.port || 5000;


io.on("connection", socket => {

    socket.on('join', (user, cb) => {
        let { error } = addUser(socket.id, user.username, user.roomName);
        if (error) return cb(error);


        socket.join(user.roomName);

        socket.emit('message', { user: 'admin', text: `welcome to ${user.roomName} chatRoom ` });
        socket.broadcast.to(user.roomName).emit('message', { user: 'admin', text: `${user.username} joined the room ` });
        io.to(user.roomName).emit('roomData', { roomName: user.roomName, users: getUserByroomName(user.roomName) });
        cb();
    })

    socket.on('sendMessage', (message, cb) => {

        const user = getUser(socket.id);
        io.in(user.roomName).emit('message', { user: user.username, text: message });
        cb();
    })

    socket.on("disconnect", () => {

        const user = removeUser(socket.id);

        if (user) {
            io.in(user.roomName).emit('message', { user: 'admin', text: `${user.username} left the server ` });
            io.to(user.roomName).emit('roomData', { roomName: user.roomName, users: getUserByroomName(user.roomName) });
        }
    })
})


app.get('/', (req, res) => {
    res.send('server is working !');

});

