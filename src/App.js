import React from 'react';
import './App.css';
import BrowserRouter from 'react-router-dom/BrowserRouter'
import Route from 'react-router-dom/Route'

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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.name.substr(0, 9) === 'isProduct' ? event.target.checked : event.target.value;
    const name = event.target.name;

    this.setState({[name]: value});
  }

  handleSubmit(event) {
    alert(
      this.state.name + ' ' + this.state.state
    );
    event.preventDefault();
  }

  validateZip() {
   let url = 'https://us-zipcode.api.smartystreets.com/lookup?auth-id=3cb227ce-314a-fc92-a26b-dfaa1dd5fe6d&auth-token=jrzoP7qyPzKtzAFveY2l&city=' + this.state.city + '&state=' + this.state.state
   fetch(url)
   .then(response => response.json())
   .then(data => data[0].zipcodes)
   .then(data => {
     const zipHash = {}
     for (const place in data) {
       zipHash[place.zipcode] = true
     }
     return zipHash
   })
   .then(data => {this.state.zipcode in data ? this.setState({zipValid: true}) : this.setState({zipValid: false})})
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
