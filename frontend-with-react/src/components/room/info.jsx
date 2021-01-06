import React, { Component } from 'react';
import './info.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class RoomInfo extends Component {
    state = {}
    render() {
        return (
            <div className="container-fluid text-center h1 bg-dark text-white pb-2">
                Room : {this.props.roomName}
            </div>);
    }
}

export default RoomInfo;