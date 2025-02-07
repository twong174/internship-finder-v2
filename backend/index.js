const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();


const app = express();
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173"
}));


const CX = process.env.CX;
const API_KEY = process.env.API_KEY;
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
