import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";  
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Menu()
{   
         return(
            <>
    <Navbar id='myheadermenu'  bg="dark" data-bs-theme="dark">    
      <Container fluid>
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className='nav-link' to="/">Dashboard</Link>
           
            <NavDropdown title="Shop" id="basic-nav-dropdown">
              <Link className='dropdown-item' to="/category">Category</Link>
              <Link className='dropdown-item' to="/Subcatelist">Sub Category</Link>
              <Link className='dropdown-item' to="/Productlist">Products</Link>
            </NavDropdown> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            </>
        );
    }
    
    

  