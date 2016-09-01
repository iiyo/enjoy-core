
var at = require("./at");
var partial = require("./partial");

//
// ### Function picker(key)
//
//     string | number -> (collection -> any)
//
// Binds `at` to a `key`.
//

function picker (key) {
    return partial(at, undefined, key);
}

module.exports = picker;
