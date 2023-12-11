import { Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

function NavBar() {

  return (

    <Navbar collapseOnSelect expand="lg"  variant="light" className="navbar">
    <Navbar.Brand href="/">Amukelani Nyambi.</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="/Resume" className="link">Resume</Nav.Link>
        <Nav.Link href="/Projects" className="link">Projects</Nav.Link>
        <Nav.Link href="/ContactMe" className="link">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    
    
  )
}

export default NavBar