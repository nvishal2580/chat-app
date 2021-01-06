import React, { Component } from 'react';
import './messageInput.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class MessageInput extends Component {
    state = {
        message: ""
    }

    handleChange = (e) => {


        this.setState({ message: e.currentTarget.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.message.trim() === '') {
            return;
        }
        this.props.handleChange(this.state.message);
        this.setState({ message: '' });

    }
    render() {
        return (
            <form className="form-inline row m-2">
                <div className="form-group col-sm-10 input-field ">
                    <input type="text" className="form-control " value={this.state.message} onChange={this.handleChange} autoFocus required />
                </div>
                <div className="form-group col-sm-2 send-btn">
                    <button type="submit" className="btn btn-outline-dark " onClick={this.handleSubmit}>Send</button>
                </div>

            </form>);
    }
}

export default MessageInput;