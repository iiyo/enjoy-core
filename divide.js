
var auto = require("./auto");

function divide () {
    return Array.prototype.reduce.call(arguments, function (a, b) { return a / b; });
}

module.exports = auto(divide, 2);
