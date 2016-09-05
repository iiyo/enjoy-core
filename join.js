
var free = require("./free");
var auto = require("./auto");
var reduce = require("./reduce");
var isArrayLike = require("enjoy-typechecks").isArrayLike;

var joinArrayLike = free(Array.prototype.join);

function join (collection, glue) {
    
    if (arguments.length < 2) {
        glue = "";
    }
    
    if (isArrayLike(collection)) {
        return joinArrayLike(collection, glue);
    }
    
    return reduce(function (previous, current) {
        return previous + "" + glue + current
    }, collection, "");
}

module.exports = auto(join);
