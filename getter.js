
var at = require("./at");
var bind = require("./bind");

//
// ### Function getter(collection)
//
//     collection -> (string | number -> any)
//
// Binds `at` to a `collection`.
//

function getter (collection) {
    return bind(at, collection);
}

module.exports = getter;
