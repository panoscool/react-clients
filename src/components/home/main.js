import React, { Component } from 'react';
import Header from '../header/main';
import Products from '../products';
import Menu from '../menu/main';
import '../../style/layout.css';
import Footer from '../footer/main';

export default class Home extends Component {

  logout() {
    // logout() exists to `this` of app prop provided by the parent (App.js)
    this.props.app.logout();
  }

  render() {
    const { user } = this.props;

    return (
      <div className="home">
        <div className="user">
          <div><img src={user.imageUrl} alt="Avatar" /></div>
          <div>{user.name}</div>
        </div>

        <div className="logout">
          <button onClick={() => this.logout()}>Log out</button>
        </div>
        <div className="grid-container">
          <div className="header">
            <Header />
          </div>
          <div className="navbar">
            <Menu />
          </div>
          <div className="main">
            <Products />
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}
