import {
  Button,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">CREAM CHEESE</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">LOGIN</Nav.Link>
              <Nav.Link href="#action2">JOIN</Nav.Link>
              <NavDropdown title="MY PAGE" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">CART</NavDropdown.Item>
                <NavDropdown.Item href="#action4">ORDER</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
