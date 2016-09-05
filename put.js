
var auto = require("./auto");

//
// ### Function put(collection, key, value)
//
//     collection -> string -> any -> undefined
//
// Puts a `value` into a collection at `key`.
//

function put (collection, key, value) {
    collection[key] = value;
}

module.exports = auto(put);
