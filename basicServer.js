const http = require("node:http");
const fs = require("node:fs");

const PORT = 8000;

const server = http.createServer((req, res) => {
  const method = req.method;
  const path = req.url;
  const log = `[${Date.now()}: ${method}: ${path}]`;
  fs.appendFile("log.txt", log, "utf-8", (err) => {
    if (err) {
      console.log(`Something went wrong while appending file: ${err}`);
    }
  });
  switch (method) {
    case "GET":
      {
        switch (path) {
          case "/":
            return res.writeHead(200).end("Welcome to Home page");
          case "/contact-us":
            return res
              .writeHead(200)
              .end("E-mail: mt2655273@gmail.com\nPhone-no: +91 88627030400");
          case "/tweet":
            return res.writeHead(200).end("Tweet1\nTweet2\nTweet3");
        }
      }
      break;
    case "POST": {
      switch (path) {
        case "/tweet":
          return res.writeHead(201).end("Your tweet was created");
      }
    }
  }
});

server.listen(PORT, () => {
  console.log("Server started at port: ", PORT);
});
