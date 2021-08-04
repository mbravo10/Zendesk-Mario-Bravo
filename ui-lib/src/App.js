import "bootstrap/dist/css/bootstrap.min.css";
import { Alert, Container, Row, Col } from "react-bootstrap";
import { LoadTix } from "./tickets/tix";

function App() {
  return (
    <div>
      <Alert variant="success">
        <Alert.Heading>Hey, nice to see you</Alert.Heading>
        <p>
          This is the mobile ticket viewer for Zendesk. If you have any comments
          or concerns please feel free to reach us here:
        </p>
        <hr />
        <p className="mb-0">
          Whenever you need to, be sure to use margin utilities to keep things
          nice and tidy.
        </p>
      </Alert>
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
