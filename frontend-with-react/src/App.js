import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import Join from "./components/join/join.jsx";
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Chat from './components/chat/chat.jsx';
import { useHistory } from 'react-router-dom';
const ENDPOINT = "http://localhost:5000";


class App extends Component {

  state = { username: "", roomName: "" }

  handleUser = (user) => {
    this.setState({ username: user.username, roomName: user.roomName });
  }


  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/chat" component={() => <Chat user={this.state} />} ></Route>
          <Route path="/" component={() => <Join handleUser={this.handleUser} />}></Route>

        </Switch>
      </BrowserRouter>
    );
  }
}


export default App;

