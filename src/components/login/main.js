import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

import Authentication from '../../services/authentication';

class Login extends Component {

  onSuccess(res) {
    Authentication.success(res)
    this.props.app.login();
  }

  onFailure(res) {
    Authentication.failure(res)
  }

  render() {
    return (
      <div className="Login">
        
        <GoogleLogin
          clientId="411211794868-2kj7ooa8fm0gu41eqn6596m62tfiklro.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={(res) => this.onSuccess(res)}
          onFailure={(res) => this.onFailure(res)}
        />

      </div>
    );
  }
}

export default Login;