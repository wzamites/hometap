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

function StateDropdown(props) {
  return (
    <label>
      <h6>State</h6>
      <select name='state' value={props.value} onChange={props.onChange} required>
        <option value='' disabled>Choose:</option>
        <option value="AL">Alabama</option>
        <option value="AK">Alaska</option>
        <option value="AZ">Arizona</option>
        <option value="AR">Arkansas</option>
        <option value="CA">California</option>
        <option value="CO">Colorado</option>
        <option value="CT">Connecticut</option>
        <option value="DE">Delaware</option>
        <option value="DC">District Of Columbia</option>
        <option value="FL">Florida</option>
        <option value="GA">Georgia</option>
        <option value="HI">Hawaii</option>
        <option value="ID">Idaho</option>
        <option value="IL">Illinois</option>
        <option value="IN">Indiana</option>
        <option value="IA">Iowa</option>
        <option value="KS">Kansas</option>
        <option value="KY">Kentucky</option>
        <option value="LA">Louisiana</option>
        <option value="ME">Maine</option>
        <option value="MD">Maryland</option>
        <option value="MA">Massachusetts</option>
        <option value="MI">Michigan</option>
        <option value="MN">Minnesota</option>
        <option value="MS">Mississippi</option>
        <option value="MO">Missouri</option>
        <option value="MT">Montana</option>
        <option value="NE">Nebraska</option>
        <option value="NV">Nevada</option>
        <option value="NH">New Hampshire</option>
        <option value="NJ">New Jersey</option>
        <option value="NM">New Mexico</option>
        <option value="NY">New York</option>
        <option value="NC">North Carolina</option>
        <option value="ND">North Dakota</option>
        <option value="OH">Ohio</option>
        <option value="OK">Oklahoma</option>
        <option value="OR">Oregon</option>
        <option value="PA">Pennsylvania</option>
        <option value="RI">Rhode Island</option>
        <option value="SC">South Carolina</option>
        <option value="SD">South Dakota</option>
        <option value="TN">Tennessee</option>
        <option value="TX">Texas</option>
        <option value="UT">Utah</option>
        <option value="VT">Vermont</option>
        <option value="VA">Virginia</option>
        <option value="WA">Washington</option>
        <option value="WV">West Virginia</option>
        <option value="WI">Wisconsin</option>
        <option value="WY">Wyoming</option>
      </select>
    </label>
  )
}

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
    this.validateZip = this.validateZip.bind(this);
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
      <form onSubmit={this.handleSubmit}>
        <Form label='Name' name='name' placeholder="John Doe" value={this.state.name} onChange={this.handleChange} required='required'/>
        <br/>
        <Form label='Address Line 1' name='street' placeholder="123 Main St." value={this.state.street} onChange={this.handleChange} required='required'/>
        <br/>
        <Form label='Address Line 2' name='street2' placeholder="Apt 4A" value={this.state.street2} onChange={this.handleChange}/>
        <br/>
        <Form label='City' name='city' placeholder="Los Angeles" value={this.state.city} onChange={this.handleChange} required='required'/>
        <br />
        <StateDropdown value={this.state.state} onChange={this.handleChange} />
        <br/>
        <Form label='Zip' name='zipcode' placeholder="90001" value={this.state.zipcode} onChange={this.handleChange} required='required'/>
        <br/>
        <Form label="Email" name="email" placeholder="john@hometap.com" value={this.state.email} onChange={this.handleChange} required='required'/>
        <br/>
        <Form label="Phone Number" name="phone" placeholder="973-234-2353" value={this.state.phone} onChange={this.handleChange} required='required'/>
        <br/>
        <Form label="Product A" name="isProductA" type="checkbox" checked={this.state.isProductA} onChange={this.handleChange}/>
        <br/>
        <Form label="Product B" name="isProductB" type="checkbox" checked={this.state.isProductB} onChange={this.handleChange}/>
        <br/>
        <Form label="Product C" name="isProductC" type="checkbox" checked={this.state.isProductC} onChange={this.handleChange}/>
        <br/>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}

export default App;
