import React from 'react';

function Field(props) {
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

function Form(props) {
    return (
      <form onSubmit={props.onSubmit}>
        <Field label='Name' name='name' placeholder="John Doe" value={props.name} onChange={props.onChange} required='required'/>
        <br/>
        <Field label='Address Line 1' name='street' placeholder="123 Main St." value={props.street} onChange={props.onChange} required='required'/>
        <br/>
        <Field label='Address Line 2' name='street2' placeholder="Apt 4A" value={props.street2} onChange={props.onChange}/>
        <br/>
        <Field label='City' name='city' placeholder="Los Angeles" value={props.city} onChange={props.onChange} required='required'/>
        <br />
        <StateDropdown value={props.state} onChange={props.onChange} />
        <br/>
        <Field label='Zip' name='zipcode' placeholder="90001" value={props.zipcode} onChange={props.onChange} required='required'/>
        <br/>
        <Field label="Email" name="email" placeholder="john@hometap.com" value={props.email} onChange={props.onChange} required='required'/>
        <br/>
        <Field label="Phone Number" name="phone" placeholder="973-234-2353" value={props.phone} onChange={props.onChange} required='required'/>
        <br/>
        <Field label="Product A" name="isProductA" type="checkbox" checked={props.isProductA} onChange={props.onChange}/>
        <br/>
        <Field label="Product B" name="isProductB" type="checkbox" checked={props.isProductB} onChange={props.onChange}/>
        <br/>
        <Field label="Product C" name="isProductC" type="checkbox" checked={props.isProductC} onChange={props.onChange}/>
        <br/>
        <input type="submit" value="Submit"/>
      </form>
    );
}

export default Form;
