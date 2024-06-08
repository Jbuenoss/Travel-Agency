import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './style.css';

function NavbarComponent(){

    return(
    <Navbar expand="sm" className="bg-dark navbar-dark fs-5">
      <Container>

        <Navbar.Brand href="#home" className="text-uppercase" id='primary-color'>Travel Agency</Navbar.Brand> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#packages">Packages</Nav.Link>
            <Nav.Link href="#faq">FAQ</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
        
    </Navbar>
    );
}

export default NavbarComponent;