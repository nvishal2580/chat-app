import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './join.css';



class Join extends Component {



    state = { username: "", roomName: "" }

    handleChange = (e) => {
        let user = { username: this.state.username, roomName: this.state.roomName };
        const target = e.currentTarget.name;
        const value = e.currentTarget.value;
        user[target] = value;
        this.setState({ username: user.username, roomName: user.roomName });


    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleUser(this.state);
        this.props.history.push('/chat');
    }

    render() {

        return (

            <div className="join-container " >
                <div className="heading"><u>Join the chat group</u></div>
                <form onSubmit={this.handleSubmit} >
                    <div className="form-group text-center">
                        <label className="label">Username</label>
                        <input type="text" name="username" className="form-control" value={this.state.username} onChange={this.handleChange} required />
                    </div>
                    <div className="form-group text-center">
                        <label className="label">Room Name</label>
                        <input type="text" name="roomName" value={this.state.roomName} onChange={this.handleChange} className="form-control" required />
                    </div>
                    <div className="submit-button text-center">
                        <button type="submit" className="btn btn-outline-primary ">Join</button>
                    </div>

                </form>
            </div>
        );

    }
}


export default withRouter(Join);