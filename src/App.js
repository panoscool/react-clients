import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import './App.css';

import Authentication from './services/authentication';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      authenticated: Authentication.exists(), // boolean true or false
      user: Authentication.getUserData(), // either an object or null
    }
  }

  onSuccess = (res) => {
    Authentication.success(res)
    this.setState({
        authenticated: true
    })
  }

  logout = () => {
    Authentication.destroy()
    this.setState({
        authenticated:false
    })
  }

  render() {
    const { authenticated, user } = this.state;

    console.log(`the state of loggedIn is ${authenticated}`)

    return (
      <div className="App">

        {authenticated ?
          <div>
            <div>
              <div><img src={user.imageUrl} alt="Profile Image" /></div>
              <div>{user.name}</div>
            </div>

            <div>
              <button onClick={() => this.logout()}>Log out</button>
            </div>
          </div>
          :
          <GoogleLogin
            clientId="411211794868-2kj7ooa8fm0gu41eqn6596m62tfiklro.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={this.onSuccess}
            onFailure={Authentication.failure}
          />
        }

      </div>
    );
  }
}

export default App;