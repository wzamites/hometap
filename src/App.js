import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";

import Form from './Form'
import Success from './Success'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      street: '',
      street2: '',
      city: '',
      zipcode: '',
      email: '',
      phone: '',
      state: '',
      isProductA: false,
      isProductB: false,
      isProductC: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const value = event.target.name.substr(0, 9) === 'isProduct' ? event.target.checked : event.target.value;
    const name = event.target.name;

    this.setState({[name]: value});
  }

  render() {
    return (
      <BrowserRouter>
        <Route exact path='/' render={(props) => (
          <Form {...props}
            name={this.state.name}
            street={this.state.street}
            street2={this.state.street2}
            city={this.state.city}
            zipcode={this.state.zipcode}
            email={this.state.email}
            phone={this.state.phone}
            state={this.state.state}
            isProductA={this.state.isProductA}
            isProductB={this.state.isProductB}
            isProductC={this.state.isProductC}
            onChange={this.handleChange}
          />
        )} />
        <Route exact path='/success'>
          <Success
            name={this.state.name}
            street={this.state.street}
            street2={this.state.street2}
            city={this.state.city}
            zipcode={this.state.zipcode}
            email={this.state.email}
            phone={this.state.phone}
            state={this.state.state}
            isProductA={this.state.isProductA}
            isProductB={this.state.isProductB}
            isProductC={this.state.isProductC}
          />
        </Route>
      </BrowserRouter>
    );
  }
}

export default App;
