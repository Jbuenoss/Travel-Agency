import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComponent(){

    return(
    <Navbar expand="sm" className="bg-dark navbar-dark ">
      <Container>

        <Navbar.Brand href="#home" className="text-uppercase">Travel Agency</Navbar.Brand> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Packages</Nav.Link>
            <Nav.Link href="#link">FAQ</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
        
    </Navbar>
    );
}

export default NavbarComponent;