
var map = require("./map");

function keys (collection) {
    return map(function (value, key) {
        return key;
    }, collection);
}

module.exports = keys;
