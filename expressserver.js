const express = require("express");
const morgan = require("morgan");
const fs = require("fs");

const app = express();
PORT = 3000;
const accessLogStream = fs.createWriteStream("log.txt", { flags: "a" });
app.use(morgan("combined", { stream: accessLogStream }));

app.get("/", (req, res) => {
  res.writeHead(200).end("Welcome to home page");
});
app.get("/contact-us", (req, res) => {
  res
    .writeHead(200)
    .end("E-mail: mt2655273@gmail.com\nPhone-no: +91 88627030400");
});
app.get("/tweet", (req, res) => {
  res.writeHead(200).end("Tweet1\nTweet2\nTweet3");
});
app.post("/tweet", (req, res) => {
  res.writeHead(201).end("Your tweet was created");
});

app.listen(PORT, () => {
  console.log(`Server satrted at port: ${PORT}`);
});
