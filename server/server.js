const express = require("express");
const morgan = require("morgan");
const fs = require("fs");
const path = require("node:path")


const app = express();
PORT = 3000;
const filePath = path.join(__dirname,"log.txt")
console.log(filePath);

const accessLogStream = fs.createWriteStream(filePath, { flags: "a" });
app.use(morgan("combined", { stream: accessLogStream }));

app.use(express.static(path.join(__dirname,"dist")))
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"dist","index.html"))
})

app.listen(PORT, () => {
  console.log(`Server satrted at port: ${PORT}`);
});
// const express = require("express");
// const morgan = require("morgan");
// const fs = require("fs");
// const path = require("node:path");

// const app = express();
// const PORT = process.env.PORT || 3000;

// const filePath = path.join(__dirname, "log.txt");
// const accessLogStream = fs.createWriteStream(filePath, { flags: "a" });

// app.use(morgan("combined", { stream: accessLogStream }));

// app.use(express.static(path.join(__dirname, "dist")));
// console.log(__dirname);

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "dist", "index.html"));
// });


// app.listen(PORT, () => {
//   console.log(`Server started at port: ${PORT}`);
// });
