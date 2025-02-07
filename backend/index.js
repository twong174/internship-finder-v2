const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

const CX = process.env.CX;
const API_KEY = process.env.API_KEY;
const PORT = process.env.PORT;

app.get("/getData", async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) {
      return res.status(400).json({ error: "Query parameter is invalid" });
    }

    const URL = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CX}&q=${query} internship application|short-term job|quick apply`;

    const response = await axios.get(URL);

    const results = response.data.items.map((item) => ({
      title: item.title,
      link: item.link,
      snippet: item.snippet,
    }));

    res.json(results);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
