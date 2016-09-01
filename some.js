
var auto = require("./auto");
var free = require("./free");
var types = require("enjoy-typechecks");

var someArray = free(Array.prototype.some);

function some (fn, collection) {
    if (types.isArrayLike(collection)) {
        return someArray(collection, fn);
    }
    else {
        return someObject(fn, collection);
    }
}

function someObject (fn, collection) {
    return Object.keys(collection).some(function (key) {
        return fn(collection[key], key, collection);
    });
}

module.exports = auto(some);
