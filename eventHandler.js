const EventEmitter = require("events");

const emitter = new EventEmitter();

function handleVisit() {
    console.log("Page visited");
}

function visitPage() {
    emitter.on("visit", handleVisit);
    emitter.emit("visit");
}

console.log("Before visits:", emitter.listenerCount("visit"));

visitPage();
visitPage();
visitPage();

console.log("After visits:", emitter.listenerCount("visit"));

console.log("\nNow using a better approach:");

const newEmitter = new EventEmitter();

newEmitter.on("visit", handleVisit);

console.log("Listeners at startup:", newEmitter.listenerCount("visit"));

newEmitter.emit("visit");
newEmitter.emit("visit");
newEmitter.emit("visit");

console.log("Listeners after visits:", newEmitter.listenerCount("visit"));

console.log("\nUsing once():");

newEmitter.once("login", () => {
    console.log("Login event handled only once");
});

newEmitter.emit("login");
newEmitter.emit("login");

console.log("Login listeners:", newEmitter.listenerCount("login"));