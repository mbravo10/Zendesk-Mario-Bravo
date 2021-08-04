import axios from "axios";
import React, { useState } from "react";
import { Button, Card, Row, Col } from "react-bootstrap";

const site = "http://localhost:5000/api";

export const LoadTix = () => {
  const [tickets, setTickets] = useState([]);
  const [onLoad, setOnLoad] = useState(false);

  const response = async () => {
    try {
      const res = await axios.get(site);
      console.log(res);
      const data = [...res.data.tickets];
      setTickets([...data]);
      setOnLoad(true);
    } catch (error) {
      console.log(error);
      setOnLoad(false);
    }
  };

  const getDate = (info) => {
    var text = info.substr(0, 10);
    return text;
  };

  const goThroughCards = tickets.map((e) => (
    <article key={e.id}>
      <Card className="text-center" border="primary">
        <Card.Header>{e.subject}</Card.Header>
        <Card.Body>
          <Card.Title>Status: {e.status} </Card.Title>
          <Card.Text>{e.description}</Card.Text>
          <Button variant="primary">Go to Ticket</Button>
        </Card.Body>
        <Card.Footer className="text-muted">
          {getDate(e.created_at)}
          <Row>
            <Col>Ticket# - {e.id}</Col>
          </Row>
        </Card.Footer>
      </Card>
    </article>
  ));
  return (
    <div>
      <Row>
        <Button
          onClick={!onLoad ? response : null}
          variant={onLoad ? "success" : "secondary"}
        >
          {" "}
          {onLoad ? "Got Tickets, click to refresh" : "Get Ticket Requests"}
        </Button>
      </Row>
      <hr />
      <Row xs={1} md={2} className="g-4">
        {goThroughCards}
      </Row>
    </div>
  );
};
