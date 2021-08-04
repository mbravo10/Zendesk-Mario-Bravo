import axios from "axios";
import React, { useState } from "react";
import { Button, Card, Row } from "react-bootstrap";
import SoloTicket from "./pagination";

const site = "http://localhost:5000/api";

export const LoadTix = () => {
  const [tickets, setTickets] = useState([]);
  const [onLoad, setOnLoad] = useState(false);
  const [onError, setOnError] = useState(false);
  const [data, setData] = useState({
    offset: 0,
    currentPage: 0,
    perPage: 10,
    pageCount: 0,
  });

  const response = async () => {
    try {
      const res = await axios.get(site);
      const rData = [...res.data.tickets];
      setTickets([...rData]);
      setData({
        ...data,
        pageCount: Math.ceil(rData.length / data.perPage),
      });
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
        <Button>{data.pageCount}</Button>
      </Row>
      <hr />
      <Row xs={1} md={2} className="g-4">
        {goThroughCards}
      </Row>
    </div>
  );
};
