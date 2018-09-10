import React, { Component } from "react";
import Header from "../header/main";
import Menu from "../menu/main";
import Footer from "../footer/main";
import SearchBar from "../../containers/search";
import ProductList from "../../containers/product-list";

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
          <div>
            <img src={user.imageUrl} alt="Avatar" />
          </div>
          <div>{user.name}</div>
        </div>

        <div className="logout">
          <button onClick={() => this.logout()}>Log out</button>
        </div>

        <div className="grid-container">
          <div className="header">
            <Header />
          </div>
          <div className="search-bar">
            <SearchBar />
          </div>
          <div className="navbar">
            <Menu />
          </div>
          <div className="footer">
            <ProductList />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
