
var auto = require("./auto");

function multiply () {
    return Array.prototype.reduce.call(arguments, function (a, b) { return a * b; });
}

module.exports = auto(multiply, 2);
