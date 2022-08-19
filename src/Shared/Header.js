import { NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import { useAuthState, } from 'react-firebase-hooks/auth';
import { signOut  } from 'firebase/auth';
import auth from '../firebase-init';
const Header = () => {
  const [user] = useAuthState(auth);
  return (
      <Navbar collapseOnSelect sticky='top' expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand  as={Link} to="/"><img src={logo} alt="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#service">Services</Nav.Link>
              <Nav.Link href="#expert">Expert</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/about">About us</Nav.Link>
              <Nav.Link eventKey={2} as={Link} to="/login">
                {
                  user? <button className='btn btn-danger' onClick={()=>signOut(auth)}>Logout</button>
                  :"Login"
                }
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default Header;