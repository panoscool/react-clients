import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPorducts } from '../redux/actions';

class Products extends Component {
  componentDidMount() {
    this.props.fetchPorducts();
  }

  renderProducts() {
    return _.map(this.props.products, product => {
      return (
        <li className="list-group-item" key={product.id}>
          {product.title}
        </li>
      );
    })
  }

  render() {
    return (
      <div>
        <h3>Products</h3>
        <ul className="list-group">{this.renderProducts}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {products: state.products}
}

export default connect(mapStateToProps, { fetchPorducts })(Products);
