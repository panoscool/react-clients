import React, { Component } from 'react';
import './App.css';

import Authentication from './services/authentication';
import Login from './components/login/login';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      authenticated: Authentication.exists(), // boolean true or false
      user: Authentication.getUserData(), // either an object or null
    }
  }

  login() {
    this.setState({
      authenticated: true,
      user: Authentication.getUserData()
    })
  }

  logout() {
    Authentication.destroy()
    this.setState({
      authenticated: false
    })
  }

  render() {
    const { authenticated, user } = this.state;

    return (
      <div className="App">

        {authenticated ?
          <div>
            <div>
              <div><img src={user.imageUrl} alt="Avatar" /></div>
              <div>{user.name}</div>
            </div>
            
            <div>
              <button onClick={() => this.logout()}>Log out</button>
            </div>
          </div>
          :
          <Login onLogin={() => this.login()}/>
        }

      </div>
    );
  }
}

export default App;