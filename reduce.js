
var each = require("./each");
var auto = require("./auto");

//
// ### Function reduce(fn, collection[, value])
//
//     (any -> any -> string|number -> collection) -> collection -> any -> any
//
// Reduces a collection to a single value by applying every item in the collection
// along with the item's key, the previously reduced value (or the start value)
// and the collection itself to a reducer function `fn`.
//

function reduce (fn, collection, value) {
    
    // If the collection is an array, the native .reduce() method is used for performance:
    if (Array.isArray(collection)) {
        return collection.reduce(fn, value);
    }
    
    each(function (item, key) {
        value = fn(value, item, key, collection);
    }, collection);
    
    return value;
}

module.exports = auto(reduce);
