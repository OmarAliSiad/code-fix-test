const { sum } = require("./utils");

console.log(sum(5, "3"));

const user = {
    name: "Omar"
}

// Bug Fix: Handle potential undefined property access safely
// If 'user.age' is undefined or null, provide a fallback message.
// Otherwise, convert 'user.age' to a string and then to uppercase.
console.log(user.age ? String(user.age).toUpperCase() : "Age not available");
