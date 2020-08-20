import React from 'react';
import './App.css';

function Form(props) {
  return (
    <label>
      <h6>{props.label}</h6>
      <input
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        type={props.type}
        required = {props.required}
      />
    </label>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const value = event.target.name[0] === 'i' ? event.target.checked : event.target.value;
    const name = event.target.name;

    this.setState({[name]: value});
  }

  handleSubmit(event) {
    alert(
      this.state.name + ' ' + this.state.zipcode
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
      <form onSubmit={this.handleSubmit}>
        <Form label='Name' name='name' placeholder="John Doe" value={this.state.name} onChange={this.handleInputChange} required='required'/>
        <br/>
        <Form label='Address Line 1' name='street' placeholder="123 Main St." value={this.state.street} onChange={this.handleInputChange} required='required'/>
        <br/>
        <Form label='Address Line 2' name='street2' placeholder="Apt 4A" value={this.state.street2} onChange={this.handleInputChange}/>
        <br/>
        <Form label='City' name='city' placeholder="Los Angeles" value={this.state.city} onChange={this.handleInputChange} required='required'/>
        <br/>
        <Form label='State' name='state' placeholder="CA" value={this.state.state} onChange={this.handleInputChange} required='required'/>
        <br />
        <Form label='Zip' name='zipcode' placeholder="90001" value={this.state.zipcode} onChange={this.handleInputChange} required='required'/>
        <br/>
        <Form label="Email" name="email" placeholder="john@hometap.com" value={this.state.email} onChange={this.handleInputChange} required='required'/>
        <br/>
        <Form label="Phone Number" name="phone" placeholder="973-234-2353" value={this.state.phone} onChange={this.handleInputChange} required='required'/>
        <br/>
        <Form label="Product A" name="isProductA" type="checkbox" checked={this.state.isProductA} onChange={this.handleInputChange}/>
        <br/>
        <Form label="Product B" name="isProductB" type="checkbox" checked={this.state.isProductB} onChange={this.handleInputChange}/>
        <br/>
        <Form label="Product C" name="isProductC" type="checkbox" checked={this.state.isProductC} onChange={this.handleInputChange}/>
        <br/>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}


export default App;
