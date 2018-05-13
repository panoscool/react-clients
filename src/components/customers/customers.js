import React, { Component } from 'react';

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
            else return cutomer.firstName.match(re) || cutomer.lastName.match(re) || cutomer.phone.match(re)
        }).map((cutomer, key) => 
            <div className="customersList" key={key}>
                {cutomer.firstName} {cutomer.lastName} {cutomer.phone}
            </div>)}
    
            <input type="text" onChange={this.searchFilter}/>
        </div>  
    )
  }
}    