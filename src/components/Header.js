import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import IcoSearch from '../assets/icons/search.svg'
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';



function Header() {
    return (
        <header >
            <Navbar expand="lg" className="header-dark">
                <Container>
                    <Navbar.Brand as={Link} to="/home"><img src={Logo} width={130} alt='log' /> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Nav>
                        <InputGroup>
                            <div className="search-bar">
                                <Button variant="warning" className='btn btn-location'>Delhi NCR</Button>
                                <Form.Control type='search' className='search-form' aria-label="Example text with two button addons" placeholder='Search By..' />
                                <Button variant="warning" className='btn btn-search border-start-0'><img src={IcoSearch} className='img-fluid' alt='IcoSearch' /></Button>
                            </div>
                        </InputGroup>
                    </Nav>
                    <Navbar.Collapse className='right-navbar-nav' id="right-navbar-nav">
                        <Nav className='ms-lg-auto'>
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/link">Buy Car</Nav.Link>
                            <Nav.Link as={Link} to="/link">Sell Car</Nav.Link>
                            <NavDropdown title="More" id="dropdown-more">
                                <NavDropdown.Item as={Link} to="/action/3.2">
                                    Your Account
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/action/3.3">Login/Register</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="/action/3.4">
                                    LogOut
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to="/link">Short Listed</Nav.Link>
                            <NavDropdown title="Account" id="dropdown-account">
                                <NavDropdown.Item as={Link} to="/action/3.1">Your Account</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/action/3.3">Login/Register</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="/action/3.4">
                                    LogOut
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;