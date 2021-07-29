import axios from "axios";
import React, { useState, useEffect } from "react";

const site = "https://zccmario.zendesk.com/api/v2/requests";
const token = "rvtGswAyzmWmtUW686a5VjldZDsbhkK0FMiHc02B";
const pass = "G0a1mark10!";
const username = "mario-bravo99@hotmail.com";
const usernamePasswordBuffer = Buffer.from(username + ":" + pass);
const base64data = usernamePasswordBuffer.toString("base64");

export const LoadTix = () => {
  const [tickets, getTickets] = useState([]);

  useEffect(() => {
    const test = async () => {
      try {
        const axiosObject = axios.create({
          headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${base64data}`,
          },
        });

        const res = await axiosObject.get(site);
        console.log(res);
        const json = await res.json();
        console.log(json);
      } catch (e) {
        console.log(e);
      }
    };
  }, []);

  const load = tickets.map((e) => <li> {e} </li>);

  return load;
};
