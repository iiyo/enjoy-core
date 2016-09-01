
var apply = require("./apply");
var toArray = require("./toArray");

//
// Reverses a function's order of arguments.
//

function flip (fn) {
    return function () {
        return apply(fn, toArray(arguments).reverse())
    };
}

module.exports = flip;
