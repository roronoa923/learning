require("dotenv/config")
const express = require("express")
const booksRouter = require("./routes/books.routes.js")
const authorsRouter = require("./routes/author.routes")
const app = express()
app.use(express.json())
PORT = process.env.PORT
app.use("/books",booksRouter)
app.use("/authors",authorsRouter)
app.listen(PORT,()=>{
    console.log(`Server started at port: ${PORT}`);  
})