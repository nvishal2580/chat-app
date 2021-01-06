import React, { Component } from 'react';
import { Message } from './message';
import 'bootstrap/dist/css/bootstrap.min.css';


class Messages extends Component {
    state = {}

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }
    render() {
        const { messages, username } = this.props;
        return (
            <div>
                <div class="mid-container" >
                    {messages.map((message, i) => <div id={i}><Message message={message} username={username} /></div>)}
                </div>
                <div style={{ float: "left", clear: "both" }}
                    ref={(el) => { this.messagesEnd = el; }}>
                </div>
            </div>

        );
    }
}

export default Messages;