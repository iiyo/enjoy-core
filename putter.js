
var put = require("./put");
var partial = require("./partial");

//
// ### Function putter(key)
//
//     string -> (collection -> value -> undefined)
//
// Binds `put` to a key.
//

function putter (key) {
    return partial(put, undefined, key, undefined);
}

module.exports = putter;
