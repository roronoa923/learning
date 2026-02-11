const fs = require("node:fs")

fs.rename("message.txt","newName.txt",(err)=>{
    if(err){
        console.log("Error while renaming our file",err);   
    }
})
