import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';

export default class Header extends Component {
  render() {
    return (
      <Navbar bg="primary" fixed="top">
        <Navbar.Brand>
          <span className="text-white">
            <i className="fas fa-book" /> BookFinder
          </span>
        </Navbar.Brand>
      </Navbar>
    );
  }
}
