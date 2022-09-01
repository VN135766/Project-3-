import Container from "react-bootstrap/Container"
import { Link } from "react-router-dom"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

const Navigation = (props) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="#home">Instaclone-</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
<<<<<<< HEAD
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/users">Following</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
=======
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/users">Following</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>

            <Nav.Link href="/post">Post</Nav.Link>

>>>>>>> 04a260c390c750be111ebbfdc13a8c0048ba6dbb
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation