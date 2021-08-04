import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { LoadTix } from "./tickets/tix";

function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Zendesk</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#tickets">Home</Nav.Link>
            <Nav.Link href="#api">API</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col>
            {" "}
            <LoadTix />{" "}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
