const express = require("express");
var cors = require("cors");
const app = express();
const axios = require("axios");
const config = require("config");
app.use(cors());

const URL = "https://zccmario.zendesk.com/api/v2/tickets";
const token = config.get("token");
const user = config.get("user");
const usernamePasswordBuffer = Buffer.from(user + ":" + token);
const basicAuth = "Basic " + usernamePasswordBuffer.toString("base64");

app.use("/api", async (req, res) => {
  try {
    const response = await axios.get(URL, {
      "Content-Type": "application/json",
      headers: { Authorization: basicAuth },
    });
    res.json(response.data);
  } catch (err) {
    console.error(err.message);
    res
      .status(500)
      .send("Sorry, could not process your request, maybe try to refresh?");
  }
});

app.listen(5000);
