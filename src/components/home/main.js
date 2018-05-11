import React, { Component } from 'react';
import Customers from './../customers/customers';

export default class Home extends Component {

  logout() {
    // logout() exists to `this` of app prop provided by the parent (App.js)
    this.props.app.logout(); 
  }

  render() {
    const { user } = this.props;
    
    return (
      <div>
        <div>
          <div><img src={user.imageUrl} alt="Avatar" /></div>
          <div>{user.name}</div>
        </div>
        
        <div>
          <button onClick={() => this.logout()}>Log out</button>
        </div>
        <Customers />
      </div>
    )
  }
}