function greet(name) {
    console.log("Hello, " + name + "!");
}

function delayedGreeting(name, callback) {
    setTimeout(function () {
        callback(name);
    }, 3000);
}

delayedGreeting("Rohan", greet);
console.log("This syntax is unblocked.");
