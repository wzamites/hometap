import React from 'react';

function Success(props) {
  return (
    <ul>
      <li>{props.name}</li>
      <li>{props.street}</li>
      <li>{props.street2}</li>
      <li>{props.city}</li>
      <li>{props.zipcode}</li>
      <li>{props.email}</li>
      <li>{props.phone}</li>
      <li>{props.state}</li>
      <li>Product A? {props.isProductA ? "Yes" : "No"}</li>
      <li>Product B? {props.isProductB ? "Yes" : "No"}</li>
      <li>Product C? {props.isProductC ? "Yes" : "No"}</li>
    </ul>)
}

export default Success;
