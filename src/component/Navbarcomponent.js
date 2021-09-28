import React from 'react'
import { FaBeer } from 'react-icons/fa';
import {MdAccountCircle} from 'react-icons/md';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import './mystyles.css'
import {Link} from "react-router-dom";


function Navbarcomponent() {
    return (

       
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='bootstrapnavbar'>
                <Container>
                    <Navbar.Brand as={Link} to={"/"}  ><FaBeer />brand</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                            <Nav.Link as={Link} to={"/brands"}>Brands</Nav.Link>
                            <NavDropdown title="Products" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">mens makeup</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Female makeup</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Children makeup</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separate link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to={"/search"} >Search</Nav.Link>
                            <NavDropdown title={<MdAccountCircle size='27px'/>} id="collasible-nav-dropdown">
                                <NavDropdown.Item as={Link} to={"/profile"}>Profile</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={"/signup"}>Sign Up</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={"/signin"}>Sign In</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#">Setting</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

           
       
    );
}

export default React.memo(Navbarcomponent);

