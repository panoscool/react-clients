import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../redux/actions";

class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  renderProducts = () => {
    return _.map(this.props.products, product => {
      return (
        <li className="list-group-item" key={product.id}>
          {product.title} - {product.color} <br /> {product.price}
        </li>
      );
    });
  };

  render() {
    return (
      <div>
        <h3 onClick={this.handleClick}>Products</h3>
        <ul className="list-group">{this.renderProducts()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { products: state.products };
}

export default connect(
  mapStateToProps,
  { fetchProducts }
)(Products);
