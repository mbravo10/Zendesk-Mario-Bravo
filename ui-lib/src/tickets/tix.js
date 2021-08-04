import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Row, Alert } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import "../App.css";

const site = "http://localhost:5000/api";

export const LoadTix = () => {
  const [tickets, setTickets] = useState([]);
  const [onLoad, setOnLoad] = useState(false);
  const [onError, setOnError] = useState(false);
  const [perPage] = useState(10);
  const [data, setData] = useState({
    offset: 0,
    currentPage: 0,
    pageCount: 0,
  });

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offsett = selectedPage * perPage;

    setData({
      ...data,
      currentPage: selectedPage,
      offset: offsett,
    });
  };

  const response = async () => {
    try {
      const res = await axios.get(site);
      const rData = [...res.data.tickets];
      setTickets([...rData]);
      const posts = tickets.slice(data.offset, data.offset + perPage);
      const goThroughCards = posts.map((e) => (
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
      setData({
        ...data,
        pageCount: Math.ceil(rData.length / perPage),
        goThroughCards,
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

  useEffect(() => {
    response();
  }, [data.offset]);

  if (onError) {
    return (
      <Alert variant="danger">
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Try to refresh and try again. If you are a developer, you probably
          don't have the API server on. Please set it up and try again. - Mario
          Bravo
        </p>
      </Alert>
    );
  } else {
    return (
      <div>
        <Row>
          <Button
            onClick={!onLoad ? response : null}
            variant={onLoad ? "success" : "secondary"}
          >
            {" "}
            {onLoad
              ? "Tickets Loaded, scroll to view"
              : "Loading ticket requests"}
          </Button>
        </Row>
        <hr />
        <Row xs={1} md={2} className="g-4">
          {data.goThroughCards}
          <ReactPaginate
            previousLabel={"prev"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={data.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        </Row>
      </div>
    );
  }
};
