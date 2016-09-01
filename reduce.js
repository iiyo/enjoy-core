
var each = require("./each");
var auto = require("./auto");
var isArrayLike = require("enjoy-typechecks").isArrayLike;

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
    
    var hasValue = arguments.length > 2;
    
    // If the collection is array-like, the native .reduce() method is used for performance:
    if (isArrayLike(collection)) {
        
        if (hasValue) {
            return Array.prototype.reduce.call(collection, fn, value);
        }
        
        return Array.prototype.reduce.call(collection, fn);
    }
    
    each(function (item, key) {
        
        if (!hasValue) {
            hasValue = true;
            value = item;
            return;
        }
        
        value = fn(value, item, key, collection);
        
    }, collection);
    
    return value;
}

module.exports = auto(reduce);
