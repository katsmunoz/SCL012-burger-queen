import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import './Navigation.css'

export class Navigation extends Component {
  render () {
    return (
      <Navbar className="navBar" bg="dark" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <NavLink className="d-inline p-2 bg-dark text-white" to="/">Home</NavLink>
            <NavLink className="d-inline p-2 bg-dark text-white" to="/waiter">Mesero</NavLink>
            <NavLink className="d-inline p-2 bg-dark text-white" to="/kitchen">Cocina</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
