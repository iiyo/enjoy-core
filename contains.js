
var some = require("./some");
var auto = require("./auto");

function contains (collection, item) {
    return some(function (currentItem) {
        return item === currentItem;
    }, collection) || false;
}

module.exports = auto(contains);
