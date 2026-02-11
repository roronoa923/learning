const fs = require("node:fs")

fs.appendFile("greetings.txt","\nMy name is mayank","utf-8",(err)=>{
    if(err){
        console.log("Error while appending content to your file",err)
    }
})

