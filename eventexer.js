const { timeStamp } = require("node:console");
const EventEmitter = require("node:events");

const eventEmitter = new EventEmitter();

// First event demo
eventEmitter.on("greet", (userName) => {
  console.log(`Hello, ${userName} welcome to Node.js`);
});

eventEmitter.emit("greet", "Mayank");

// second event demo
eventEmitter.on("orderPlaced", (id, productName) => {
  console.log(`Order ${id} for ${productName} recieved`);
});

eventEmitter.emit("orderPlaced", 101, "Laptop");

// Third event demo
eventEmitter.on("login", () => {
  console.log("User logged in");
});

eventEmitter.on("login", () => {
  console.log("Log saved to database");
});

eventEmitter.emit("login");

// Fourth event demo
eventEmitter.once("Payment",()=>{
    console.log("Payment successfull");   
})

eventEmitter.emit("Payment")
eventEmitter.emit("Payment") // Doesn't invoke again

// Fifth event demo
eventEmitter.off("login",()=>{
    console.log("Log saved to database");   
})
console.log("User logged out");

// Sixth event using class
class logger extends EventEmitter {
    message(msg){
        console.log("Message sent");
        this.emit("sendMessage",msg)
    }
}
const log = new logger()
log.on("sendMessage",(msg)=>{
    const timeStamp = new Date().toISOString()
    console.log(`New message: ${msg} timeStamp: [${timeStamp}]`);
    
})

log.message("Hello Mayank")

// Handling error using events
eventEmitter.on("error",(err)=>{
    console.log(`Error handled safely: ${err.message}`);   
})

eventEmitter.emit("error",new Error("Something went wrong"))
