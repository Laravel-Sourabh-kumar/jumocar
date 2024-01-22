import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import IcoSearch from '../assets/icons/search.svg'
import { Link } from 'react-router-dom';



function HeaderBottom() {
   
    return (
        <header className='d-none d-lg-block'>
            <Navbar expand="lg" className="main-menu">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='m-lg-auto'>
                            <Nav.Link href="javascript:void(0)" className='btn' disabled>Explore By </Nav.Link>

                            <NavDropdown title="Price Range" id="dropdown-more">
                                <NavDropdown.Item as={Link} to="/action/3.2">
                                    link
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/action/3.3">Login/Register</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="/action/3.4">
                                    link 2
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Make & Model" id="dropdown-more-2">
                                <NavDropdown.Item as={Link} to="/action/3.1">Your Account</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/action/3.3">Login/Register</NavDropdown.Item>
                              
                            </NavDropdown>
                            <NavDropdown title="Year" id="dropdown-more-3">
                                <NavDropdown.Item as={Link} to="/action/3.1">Your Account</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/action/3.3">Login/Register</NavDropdown.Item>
                              
                            </NavDropdown>
                            <NavDropdown title="Fuel" id="dropdown-more-4">
                                <NavDropdown.Item as={Link} to="/action/3.1">Your Account</NavDropdown.Item>

                            </NavDropdown>
                            <NavDropdown title="Km Driven" id="dropdown-more-5">
                                <NavDropdown.Item as={Link} to="/action/3.1">Your Account</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/action/3.3">Login/Register</NavDropdown.Item>

                            </NavDropdown>
                            <NavDropdown title="Body Type" id="dropdown-more-6">
                                <NavDropdown.Item as={Link} to="/action/3.1">Your Account</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/action/3.3">Login/Register</NavDropdown.Item>

                            </NavDropdown>
                            <NavDropdown title="Transmission" id="dropdown-more-7">
                                <NavDropdown.Item as={Link} to="/action/3.1">Your Account</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/action/3.3">Login/Register</NavDropdown.Item>
                            
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default HeaderBottom;