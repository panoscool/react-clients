import React, { Component } from 'react';
import { products } from './products';
import './index.css'

class Products extends Component {
  render() {
    return (
      <div className="products">
        {products.map((product, index) => {
      return (
        <li key={index}>{product.item} - {product.color} <br /> {product.price}</li>
          )
      })}
      </div>
    );
  }
}

export default Products;
