const users = [];

const addUser = (id, username, roomName) => {
    console.log('add user called !')
    console.log('users before check', users);
    const isUserAlreadyExist = users.filter(user => user.username === username && user.roomName === roomName)[0];
    console.log('isuserAlre', isUserAlreadyExist);


    if (isUserAlreadyExist) return { error: 'Username is already taken !' }

    let user = { id, username, roomName };

    users.push(user);

    console.log('users array after add', users);
    return user;
}

const removeUser = (id) => {
    const index = users.findIndex(user => user.id === id);
    if (index != -1) return users.splice(index, 1)[0];


}

const getUserByroomName = (roomName) => {
    // console.log(users);
    return users.filter(user => user.roomName === roomName);
}

const getUser = id => {
    return users.filter(user => user.id === id)[0];
}

module.exports = { getUserByroomName, addUser, removeUser, getUser };