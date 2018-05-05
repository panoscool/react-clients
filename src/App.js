import React, { Component } from 'react';
import './App.css';

import Authentication from './services/authentication';
import Home from './components/home/main';
import Login from './components/login/main';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      authenticated: Authentication.exists(), // boolean true or false
      user: Authentication.getUserData(), // either an object or null
    }
  }

  logout() {
    Authentication.destroy()
    this.setState({
      authenticated: false
    })
  }

  login() {
    this.setState({
      authenticated: true,
      user: Authentication.getUserData()
    })
  }

  render() {
    const { authenticated, user } = this.state;

    return (
      <div className="App">

        {authenticated ?
          <Home app={this} user={user} />
          :
          <Login app={this} />
        }

      </div>
    );
  }
}