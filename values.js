
var map = require("./map");
var id = require("./id");

//
// ### Function values(collection)
//
//     collection -> [any]
//
// Extracts all values from a collection such as `array` or `object`.
//

function values (collection) {
    return map(id, collection);
}

module.exports = values;
