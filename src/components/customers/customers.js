import React, { Component } from 'react';
import './customers.css';

const customers = [{
    firstName: "Stratos", 
    lastName: "G", 
    phone: "1234567890"
 },{
    firstName: "Apostolis", 
    lastName: "V", 
    phone: "123456789"
 },{
    firstName: "Katerina", 
    lastName: "H", 
    phone: "12345678"
 },{
    firstName: "Katerina", 
    lastName: "K", 
    phone: "1234567"
 },{
    firstName: "Maria", 
    lastName: "H", 
    phone: "123456"
 }]

export default class Customers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ""
        }
    }

    searchFilter = (e) => {
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
        }).map((cutomer, key) => 
            <div className="Customers" key={key}>
                <li>
                {cutomer.firstName} {cutomer.lastName} {cutomer.phone}
                </li>
            </div>)}
            <div className="input">
            <input type="text" onChange={this.searchFilter}/>
            </div>
        </div>  
    )
  }
}    