import React, { Component } from 'react';
import { customers } from './customers';
import './customers.css';

export default class Customers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ""
        }
    }

    searchFilter(e) {
        this.setState({search: e.target.value})
    }

   render() {
    const {search} = this.state
    const re = new RegExp(this.state.search, 'gi')
     return (
        <div>
        {customers.filter(customer => {
            if (search === "") return true
            else return customer.firstName.match(re) || customer.lastName.match(re) || customer.phone.match(re)
        }).map((customer, key) =>
            <div className="Customers" key={key}>
                <li>
                {customer.firstName} {customer.lastName} {customer.phone}
                </li>
            </div>)}
            <div className="input">
            <input type="text" onChange={(e) => this.searchFilter(e)}/>
            </div>
        </div>
    )
  }
}
