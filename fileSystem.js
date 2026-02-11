const fs = require("node:fs")

fs.readFile("message.txt","utf-8", (err,data)=>{
    if (err){
        console.log("Error while reading the file",err)
    }
    console.log(data)
})