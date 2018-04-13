import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import './App.css';

class App extends Component {
  render() {
    const responseGoogle = (response) => {
      console.log(response);
    }
    return (
      <div className="App">
        <GoogleLogin
          clientId="411211794868-4mbdl766r7eqa1trb3g27hnme7rsia0d.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
      </div>
    );
  }
}

export default App;