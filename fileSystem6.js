const fs = require("node:fs")
const path = "C:/Users/MAYANK/Documents/nodepractice/flags"
if(!path){
fs.mkdir("C:/Users/MAYANK/Documents/nodepractice/flags",{recursive:true},(err)=>{
    if(err){
        console.log("Already exist",err)
    }
    else{
        console.log("created succesfully!");       
    }
})}
else{
    console.log("Already directory exist!");
    
}
