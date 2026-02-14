const fs = require("node:fs")
const buf = require("node:buffer")

fs.readFile("./greetings.txt",(err,data)=>{
    if(err){
        console.log("Something went wrong while reading the file:",err)
    }
    console.log(data.toString())
})


