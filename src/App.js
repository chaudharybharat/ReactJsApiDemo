
import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Img from 'react-image'
const numbers = ['bharat', "harsh", "ajay", "JK"];
//const Img = require('react-image')
const listItems = numbers.map((number) =>
  <li>{number}</li>
);

class App extends Component   {
  state = {
    contacts: []
  }
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
    })
    .catch(console.log)
  }
  render() {
    return  <Contacts contacts={this.state.contacts} />;
  }
}
const Contacts = ({ contacts }) => {
  return (
    <div>
      <center><h1>React js Api Demo</h1></center>
      <center><h3>Contact List</h3></center>
      {contacts.map((contact) => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{contact.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{contact.email}</h6>
            <p class="card-text">{contact.company.catchPhrase}</p>
          </div>
        </div>
      ))}
    </div>
  )
};


export default App;
