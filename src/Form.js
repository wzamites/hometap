import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Field(props) {
  return (
    <label className={props.className}>
      <h6 className={props.required ? 'bold' : null}>{props.label}</h6>
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

function Checkbox(props) {
  return (
    <label className='contain' >
      <h6>{props.label}</h6>
      <input
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        type='checkbox'
        required = {props.required}
      />
      <span className="checkmark"></span>
    </label>
  )
}

function StateDropdown(props) {
  return (
    <label className={props.className}>
      <h6 className='bold'>State</h6>
      <select name='state' value={props.value} onChange={props.onChange} required>
        <option value='' disabled>---</option>
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

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {zipValid: false};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const city = this.props.city;
    const state = this.props.state;
    const zipcode = this.props.zipcode;
    const url = `https://www.zipcodeapi.com/rest/N4YTIo3lM8IXkucKBBOKQz3DpJj7yb0WCxSqjPomtRzLGa7tOfJe1fmgMfeod5u0/city-zips.json/${city}/${state}`
    fetch(proxyurl + url)
    .then(response => {return response.json()})
    .then(data => data.zip_codes)
    .then(data => {
      this.setState( {zipValid: data.includes(zipcode)} );
    })
    .then(data => {
      if (!this.state.zipValid) {
        alert("The Zip isn't valid")
      } else {
        this.props.history.push('./success');
      }
    })
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Row>
            <Col>
              <Field type='text' label='Name' name='name' placeholder="John Doe" value={this.props.name} onChange={this.props.onChange} className='fullWidth' required='required'/>
              <br/>
              <br/>
              <Field type='text' label='Address Line 1' name='street' placeholder="123 Main St." value={this.props.street} onChange={this.props.onChange} className='fullWidth' required='required'/>
              <br/>
              <br/>
              <Field type='text' label='Address Line 2' name='street2' placeholder="Apt 5A (optional)" value={this.props.street2} onChange={this.props.onChange} className='fullWidth'/>
              <br/>
              <br/>
              <Field type='text' label='City' name='city' placeholder="Los Angeles" value={this.props.city} onChange={this.props.onChange} className='fullWidth' required='required'/>
              <br />
              <br/>
              <StateDropdown value={this.props.state} onChange={this.props.onChange} className='fullWidth' required='required' />
              <br/>
              <br/>
              <Field type='text' label='Zip' name='zipcode' placeholder="90001" value={this.props.zipcode} onChange={this.props.onChange} className='fullWidth' required='required'/>
              <br/>
              <br/>
              <Field type='text' label="Email" name="email" placeholder="john@hometap.com" value={this.props.email} onChange={this.props.onChange} className='fullWidth' required='required'/>
              <br/>
              <br/>
              <Field type='text' label="Phone Number" name="phone" placeholder="973-234-2353" value={this.props.phone} onChange={this.props.onChange} className='fullWidth' required='required'/>
              <br/>
              <br/>
              <input type="submit" value="Submit"/>
            </Col>
            <Col>
              <Checkbox label="Product A" name="isProductA" checked={this.props.isProductA} onChange={this.props.onChange}/>
              <Checkbox label="Product B" name="isProductB" checked={this.props.isProductB} onChange={this.props.onChange}/>
              <Checkbox label="Product C" name="isProductC" checked={this.props.isProductC} onChange={this.props.onChange}/>
            </Col>
          </Row>
        </form>
      </div>
    );
  }
}

export default Form;
