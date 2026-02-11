const fs = require("node:fs")

if(fs.existsSync("C:/Users/MAYANK/Documents/nodepractice/message.txt")){
    console.log("This file exist")
}
else{
    console.log("File does not exist");
    
}