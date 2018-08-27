import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  handleChange = (event) => {
    this.setState({ term: event.target.value })
  }

  onSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="input-group">
        <input
        className="form-control"
        placeholder="Search.."
        value={this.state.term}
        onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default SearchBar;
