import React from 'react';
import Container from 'react-bootstrap/Container';
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../Logo/Recurso 2.svg';
import CartIcon from './CartIcon/CartIcon';
import UserIcon from './UserIcon/UserIcon'


const Navegacion = () => {
	return <Navbar className='navegacion' collapseOnSelect expand="lg" bg="primary" variant="dark">
				<Container className='navContainer'>
					<NavbarBrand>
						<img
							src={logo}
							width="170"
							height="30"
							className="d-inline-block align-top"
							alt="logo"
						/>
					</NavbarBrand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="#libros">Libros</Nav.Link>
							<Nav.Link href="#pricing">Vender Libros</Nav.Link>
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
						<Nav className='d-flex align-items-center'>
							<Nav.Link href="#memes">
								<CartIcon/>
							</Nav.Link>
							<Nav.Link href="#deets">
								<UserIcon/>
							</Nav.Link>						
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
};

export default Navegacion;
