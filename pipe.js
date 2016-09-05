
var each = require("./each");
var auto = require("./auto");

function pipe (value) {
    
    each(function (fn, index) {
        if (index > 0) {
            value = fn(value);
        }
    }, arguments);
    
    return value;
}

module.exports = auto(pipe, 2);
