import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

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

  return (
    <div>
      <Button onClick={response}> Get Local Weather</Button>
      <li>
        {" "}
        {tickets.map((e) => (
          <ul> {e.description} </ul>
        ))}{" "}
      </li>
    </div>
  );
};
