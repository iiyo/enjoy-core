
var put = require("./put");
var bind = require("./bind");

//
// ### Function setter(collection)
//
//     collection -> (string -> value -> undefined)
//
// Binds `put` to a collection.
//

function setter (collection) {
    return bind(put, collection);
}

module.exports = setter;
