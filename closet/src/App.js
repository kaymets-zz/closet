import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';

class Filters extends Component{
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <h2>Filters will go here</h2>
    );
  }
}

class Clothes extends Component{
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <h2>Clothes will go here</h2>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">Walk-in</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
        <Filters />
      </div>
    );
  }
}

export default App;
