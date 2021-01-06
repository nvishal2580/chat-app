import React from 'react';
import './message.css';
import RE from 'react-emoji';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Message = ({ message: { user, text }, username }) => {

    let isCurrentUser = false;

    const name = username.trim().toLowerCase();
    if (name === user) isCurrentUser = true;
    let customStyle = {};
    if (user === 'admin') {
        customStyle = { background: '#706fd3' };
    } else {
        customStyle = { background: '#34495e' };
    }

    if (isCurrentUser) {
        return (<div className="message-container mt-2" style={{ justifyContent: 'flex-end' }}>
            <p className="user">{user}</p>
            <div className="message-box " style={{ background: '#2979FF' }}>
                <p className="text-message" style={{ color: 'white' }}>{RE.emojify(text)}</p>
            </div>
        </div>);
    } else {
        return (<div className="message-container mt-2"  >

            <div className="message-box  text-white" style={customStyle}>
                <p className="text-message" >{RE.emojify(text)}</p>
            </div>
            <p className="user">{user}</p>
        </div>);
    }

}
