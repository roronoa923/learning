const EventEmitter = require("node:events")

const eventEmitter = new EventEmitter()

eventEmitter.on("greet", (userName = "No argument passed")=>{
    console.log(`Hello ${userName}, from node events`);
    
})

eventEmitter.emit("greet","Mayank")
eventEmitter.emit("greet","Digvijay")
eventEmitter.emit("greet","Abhay")

eventEmitter.once("pushNotify",()=>{
    console.log("This event will run only once");   
})

eventEmitter.emit("pushNotify")
eventEmitter.emit("pushNotify") // It will not run twice because we use once