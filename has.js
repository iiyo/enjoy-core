
var some = require("./some");
var auto = require("./auto");

function has (collection, key) {
    return some(function (item, currentKey) {
        return key === currentKey;
    }, collection) || false;
}

module.exports = auto(has);
