import axios from "axios";
import React, { useState } from "react";
import { Button, Card, Row } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";
import SoloTicket from "./soloTix";

const site = "http://localhost:5000/api";

export const LoadTix = () => {
  const [tickets, setTickets] = useState([]);
  const [onLoad, setOnLoad] = useState(false);
  const [onError, setOnError] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();

  const response = async () => {
    try {
      const res = await axios.get(site);
      const data = [...res.data.tickets];
      setTickets([...data]);
      setOnLoad(true);
    } catch (error) {
      console.log(error);
      setOnLoad(false);
      setOnError(true);
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
          <Button variant="primary" onClick={handleShow}>
            Go to Ticket
          </Button>

          <SoloTicket props={show} onClick={() => handleClose()}>
            {" "}
            Hello
          </SoloTicket>
        </Card.Body>
        <Card.Footer>
          Ticket #{e.id} - Date created: {getDate(e.created_at)}
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
