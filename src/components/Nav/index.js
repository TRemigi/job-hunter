import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

function NavComponent (props) {
    const { navSelected, setNavSelected } = props;

    return (
        <header>
            <Navbar className="bigger-bar fixed-top" bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#jobs"><span className="big-neon">Job Hunter</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="container-fluid justify-content-end">
                    <Nav.Link className="neon" href="#jobs" onClick={() => setNavSelected("jobs")}>Jobs</Nav.Link>
                    <Nav.Link className="neon" href="#log-in" onClick={() => setNavSelected("log-in")}>Log In</Nav.Link>
                    <Nav.Link className="neon" href="#log-in" onClick={() => setNavSelected("contact")}>Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default NavComponent;