
var some = require("./some");

function has (collection, key) {
    return some(function (item, currentKey) {
        return key === currentKey;
    }, collection) || false;
}

module.exports = has;
