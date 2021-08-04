import axios from "axios";
import React, { useState, useEffect } from "react";
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

  const goThroughCards = tickets.map((e) => (
    <Card style={{ width: "30rem" }}>
      <Card.Body>
        <Card.Title>{e.subject}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{e.title}</Card.Subtitle>
        <Card.Text>{e.description}</Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  ));
  return (
    <div>
      <Button onClick={response}> Get Ticket Requests</Button> {goThroughCards}
    </div>
  );
};
