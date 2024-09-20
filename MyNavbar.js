import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'; // Correct import from 'react-bootstrap'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './MyNavbar.css';  // Import the CSS file

function MyNavbar({ searchQuery, setSearchQuery }) {
  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  return (
    <Navbar expand="lg" className="custom-navbar">
    
        <Navbar.Brand as={Link} to="/">
          <img src="/img 1.jpg" alt="Brand logo" width={50} height={50} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <NavDropdown title="API's" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/APIs/Makeup">Makeup products</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/APIs/Weather">Weather API</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/APIs/Movies">Movies</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/APIs/News">News</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>

          {/* Search bar inside the navbar */}
          <div className='d-flex'>
            <input
              type='text'
              id='searchBar'
              className='form-control me-2'
              placeholder='Search for products...'
              onChange={handleSearchChange}
              value={searchQuery}
            />
          </div>
        </Navbar.Collapse>
      
    </Navbar>
  );
}

export default MyNavbar;







