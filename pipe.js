
var each = require("./each");

function pipe (value) {
    
    each(function (fn, index) {
        if (index > 0) {
            value = fn(value);
        }
    }, arguments);
    
    return value;
}

module.exports = pipe;
