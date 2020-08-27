import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import logo from './hometap-logo-horizontal-680x680.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Form from './Form';
import Success from './Success';

export default function App(props) {
  const [formState, setState] = useState({
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
  });

  function handleChange(e) {
    const value = e.target.name.substr(0, 9) === 'isProduct' ? e.target.checked : e.target.value;
    const name = e.target.name;
    setState(state => ({ ...state, [name]: value }))
  }

  return (
    <div>
      <Jumbotron>
        <Container>
          <Row>
            <Col>
              <h1>My Form</h1>
            </Col>
            <Col>
              <img alt='logo' className='logo' src={logo} />
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Container>
        <BrowserRouter>
          <Route exact path='/' render={(props) => (
            <Form {...props}
              name={formState.name}
              street={formState.street}
              street2={formState.street2}
              city={formState.city}
              zipcode={formState.zipcode}
              email={formState.email}
              phone={formState.phone}
              state={formState.state}
              isProductA={formState.isProductA}
              isProductB={formState.isProductB}
              isProductC={formState.isProductC}
              onChange={handleChange}
            />
          )} />
          <Route exact path='/success'>
            <Success
              name={formState.name}
              street={formState.street}
              street2={formState.street2}
              city={formState.city}
              zipcode={formState.zipcode}
              email={formState.email}
              phone={formState.phone}
              state={formState.state}
              isProductA={formState.isProductA}
              isProductB={formState.isProductB}
              isProductC={formState.isProductC}
            />
          </Route>
        </BrowserRouter>
      </Container>
    </div>
  );
}
