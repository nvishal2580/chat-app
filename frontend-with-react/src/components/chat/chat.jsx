import React, { Component } from 'react';
import io from 'socket.io-client';
import './chat.css';
import Users from './../users/users';
import RoomInfo from './../room/info';
import Messages from './../messages/messagesContainer';
import MessageInput from './../messages/messageInput';
import { withRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
const ENDPOINT = "http://localhost:5000";

let socket = io(ENDPOINT);


class Chat extends Component {
    state = {
        username: "",
        roomName: "",
        message: {},
        users: [],
        messages: []
    }

    componentDidMount() {

        const { username, roomName } = this.props.user;
        this.setState({ username: username, roomName: roomName });

        socket.emit('join', { username, roomName }, error => {
            if (error) {
                alert(error);
                this.props.history.push('/');
            } else {
                this.props.history.push('/chat');
            }
            console.log(this.props);

        });

        socket.on('roomData', ({ roomName, users }, cb) => {
            this.setState({ users: users });

        })

        socket.on('message', ({ user, text }) => {
            console.log('msg catched ->', text);
            let msg = { user: user, text: text };

            let messages = [...this.state.messages, msg];
            this.setState({ messages: messages });

        })

    }


    sendMessage = (message) => {
        console.log('send message function called !');
        this.setState({ message: { user: this.state.username, text: message } });
        socket.emit('sendMessage', message, () => {

        });
    }
    render() {

        return (
            <div className="container mt-4 main-container ">
                <div className="row jusify-content-center">
                    <div className=" col-md-2 users-container bg-dark text-white"><Users username={this.state.username} users={this.state.users} /></div>
                    <div className=" col-md-10 chat-container">
                        <div className="row">
                            <div className="col-12 p-0 m-0 info-container"><RoomInfo roomName={this.state.roomName} /></div>
                        </div>
                        <div className="row">
                            <div className="col-12 p-0 m-0 messages-container"><Messages messages={this.state.messages} username={this.state.username} /></div>
                        </div>
                        <div className="row">
                            <div className="col-12 p-0 m-0 input-container"><MessageInput handleChange={(message) => this.sendMessage(message)} /></div>
                        </div>

                    </div>
                </div>
            </div>

        );
    }
}

export default withRouter(Chat);