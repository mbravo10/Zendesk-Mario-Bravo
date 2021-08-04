import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Row, Pagination } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import "../App.css";

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

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offsett = selectedPage * data.perPage;

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
      const posts = tickets.slice(data.offset, data.offset + data.perPage);
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
        pageCount: Math.ceil(rData.length / data.perPage),
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
  return (
    <div>
      <Row>
        <Button
          onClick={!onLoad ? response : null}
          variant={onLoad ? "success" : "secondary"}
        >
          {" "}
          {onLoad ? "Tickets Loaded, scroll to view" : "Get Ticket Requests"}
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
};
