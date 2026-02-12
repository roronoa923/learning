
const EventEmitter = require("node:events")
const eventEmitter = new EventEmitter()

class Chat extends EventEmitter {
    sendMessage(msg){
        console.log(`Message sent`)
        this.emit("messageRecieved",msg)
    }
}

const chat = new Chat()

chat.on("messageRecieved",(msg)=>{
    console.log(`New message: ${msg}`);
    
})

chat.sendMessage("Hello,I am mayank")

eventEmitter.on("Error",(err)=>{
    
    console.error(`Error: ${err.message}`); 
    
})

eventEmitter.emit('Error', new Error("Something went wrong"))
