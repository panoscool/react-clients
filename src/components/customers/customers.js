import React, { Component } from 'react';

let customers = [{
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
    let customersList = customers.map((cutomer) => 
    <div className="customersList" key={cutomer.phone}>
        {cutomer.firstName} {cutomer.lastName} {cutomer.phone}
    </div>)

     return (
        <div>
            {customersList}
            <input type="text" 
                value={this.state.search} 
                onChange={this.searchFilter.bind(this)}/>
        </div>  
    )
  }
}    