import React, { useState } from 'react'
import Login from './Login'
import Menu from './Menu'
import Search from './Search'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link,useNavigate } from 'react-router-dom';

function Header() {
  const [search, setSearch] = useState("");
  let navigate = useNavigate();
  
  const submit = (e)=> {
    e.preventDefault();
   navigate( `/result/?search=${search}`)

  }
  return (
    <Navbar sticky="top" bg="dark" expand="lg" variant="dark" >
      <Container fluid>
        <Navbar.Brand href="/playlist">SpotiGut</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link  href="/login">Login</Nav.Link>
            <Link className='btnHeader' to ="/playlist">playList</Link>
            {/* <Nav.Link><Link to ="/playlist">playList</Link></Nav.Link> */}
            <NavDropdown title="Menu" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/playlist">playList</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              enjoy
            </Nav.Link>
          </Nav>
          {/* <Search/> */}
          <Form className="d-flex" onSubmit={submit} onChange={e => setSearch(e.target.value)} value={search}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Link to= {`/result/?search=${search}`} ><Button  variant="outline-light">Search</Button></Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header



// function Header() {
//   return (
//     <ButtonGroup aria-label="Basic example">
//       <Button variant="secondary"><Menu/></Button>
//       <Button variant="secondary"><Login/></Button>
//       <Button variant="secondary"><Search/></Button>
//     </ButtonGroup>
     
//   )
// }


// <Container>
// <Row>
//   <Col><Menu/></Col>
//   <Col><Login/></Col>
//   <Col><Search/></Col>
// </Row>  
// </Container>