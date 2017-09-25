var events = require('events');
var eventEmitter = new events.EventEmitter();

//create an event handle
var myEventHandler = function(){
  console.log("I hear a scream!");
}

//assign the event handler to an event
eventEmitter.on("scream", myEventHandler);
console.log("\non");


//Fire the 'scream' event;
eventEmitter.emit('scream');
console.log("Emitted");
