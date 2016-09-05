
var auto = require("./auto");

function subtract () {
    return Array.prototype.reduce.call(arguments, function (a, b) { return a - b; });
}

module.exports = auto(subtract, 2);
