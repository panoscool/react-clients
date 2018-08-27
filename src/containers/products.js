import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPorducts } from '../redux/actions';

class Products extends Component {
  componentDidMount() {
    this.props.fetchPorducts();
  }

  render() {
    return (
      <div></div>
    );
  }
}

export default connect(null, { fetchPorducts })(Products);
