import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

import Authentication from '../../services/authentication';

class Login extends Component {

  onSuccess = (res) => {
    Authentication.success(res)
    this.setState({
      authenticated: true
    })
  }

  onFailure = (res) => {
    Authentication.failure()
    this.setState({
      authenticated: false
    })
  }

  logout = () => {
    Authentication.destroy()
    this.setState({
      authenticated: false
    })
  }

  render() {
    const { authenticated, user } = this.props;

    console.log(`the state of loggedIn is ${authenticated}`)

    return (
      <div className="Login">
        
        <GoogleLogin
            clientId="411211794868-2kj7ooa8fm0gu41eqn6596m62tfiklro.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={this.onSuccess}
            onFailure={this.onFailure}
          />

      </div>
    );
  }
}

export default Login;