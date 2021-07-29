import axios from "axios";
import React, { useState } from "react";

export const LoadTix = () => {
  const [tickets, getTickets] = useState(["Empty", "sdf"]);

  const load = tickets.map((e) => <li> {e} </li>);

  return load;
};
