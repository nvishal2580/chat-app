import React, { Component } from 'react';
import './users.css';
class Users extends Component {
    state = {}
    render() {
        let { users, username } = this.props;
        users = users.filter(user => user.username !== username);
        return (
            <div className="inner-container">
                <div className="current-user text-center h2 pt-2">
                    <span>{this.props.username}</span>
                </div>
                <hr />
                <div className="active-users text-center">
                    <p>Active Users</p>
                    <ul className="text-left">
                        {users.map((user, i) => <li id={user.id}>{user.username}</li>)}
                    </ul>
                </div>
            </div>);
    }
}

export default Users;