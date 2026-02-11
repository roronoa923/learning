const fs = require("node:fs")

const data = "Hello, Nodejs."
fs.writeFile("greetings.txt",data,(err)=>{
    if(err){
        console.log("Error while creating the file",err)
    }
    fs.readFile("greetings.txt","utf-8",(err,data)=>{
        if(err){
            console.log("Error while reading the file",err)
        }
        console.log(data)
    })
})
