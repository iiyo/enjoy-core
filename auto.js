
var bind = require("./bind");
var apply = require("./apply");

//
// **auto(fn)**
//
// Wraps `fn` so that if it is called with only a function as its first argument,
// a partial application is returned. This means that you can do this:
//
//     each(fn)(collection);
//
// Instead of this:
//
//     each(fn, collection);
//

function auto (fn) {
    return function () {
        return (
            (arguments.length === 1 && typeof arguments[0] === "function") ?
            bind(fn, arguments[0]) :
            apply(fn, arguments)
        );
    };
}

module.exports = auto;
