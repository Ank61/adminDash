import React from 'react'
import logo from '../Component/Images/logo2.jpg';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import './navbar.css';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Profile from '../Component/Images/profile.jpeg'


export default function Navbarr() {
  return (
        <Navbar  expand="lg" style={{backgroundColor:'white'}}>
          <Container>
            <Navbar.Brand>
            <img src={logo} alt="logo" style={{width:135,height:75}}></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <input className="form-control" placeholder="Search..." type="text" style={{marginLeft:100,width:260 }} ></input><button style={{paddingTop:2,border:'none',backgroundColor:'white'}}> <i class="fa-solid fa-magnifying-glass"></i></button>
                <div style={{width:40,height:40,borderRadius:20,backgroundColor:'blue',marginLeft:200}}>
                    <img src={Profile} style={{width:40,height:40,borderRadius:20}}></img>
                </div>
                <NavDropdown title="Amit Gupta" id="basic-nav-dropdown" style={{marginLeft:5}}>
                  <NavDropdown.Item href="#action/3.1">Activity Log</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Sign out
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <div>
              <i class="fa-regular fa-envelope" style={{marginLeft:60,float:'left'}}></i>
              <span style={{float:'right',width:7,height:7,backgroundColor:'red',borderRadius:8}}></span>
              </div>
              <div>
              <i class="fa-regular fa-bell" style={{marginLeft:30,float:'left'}}></i>
              <span style={{float:'right',width:7,height:7,backgroundColor:'#28a744',borderRadius:8}}></span>
              </div>
              <div>
              <i class="fa-solid fa-power-off" style={{marginLeft:30,float:'left'}}></i>
              <span style={{float:'right',width:7,height:7,backgroundColor:'#8ecaf9',borderRadius:8}}></span>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>)
}
