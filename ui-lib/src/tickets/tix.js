import axios from "axios";
import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

const site = "http://localhost:5000/api";

export const LoadTix = () => {
  const [tickets, setTickets] = useState([]);
  const response = async () => {
    try {
      const res = await axios.get(site);
      console.log(res);
      const data = [...res.data.tickets];
      setTickets([...data]);
      console.log(tickets);
    } catch (error) {
      console.log(error);
    }
  };

  const getDate = (info) => {
    var text = info.substr(0, 10);
    return text;
  };

  const goThroughCards = tickets.map((e) => (
    <article key={e.id}>
      <Card className="text-center">
        <Card.Header>{e.subject}</Card.Header>
        <Card.Body>
          <Card.Title>Status: {e.status} </Card.Title>
          <Card.Text>{e.description}</Card.Text>
          <Button variant="primary">Go to Ticket</Button>
        </Card.Body>
        <Card.Footer className="text-muted">
          {getDate(e.created_at)}
        </Card.Footer>
      </Card>
    </article>
  ));
  return (
    <div>
      <Button onClick={response}> Get Ticket Requests</Button> {goThroughCards}
    </div>
  );
};
