import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";

import logo from './hometap-logo-horizontal-680x680.png'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'

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
      <div>
        <Jumbotron>
          <Container>
            <Row>
              <Col>
                <h1>My Form</h1>
              </Col>
              <Col>
                <img className='logo' src={logo} />
              </Col>
            </Row>
          </Container>
        </Jumbotron>
        <Container>
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
        </Container>
      </div>
    );
  }
}

export default App;
