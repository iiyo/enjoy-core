
var some = require("./some");

function contains (collection, item) {
    return some(collection, function (currentItem) {
        return item === currentItem;
    }) || false;
}

module.exports = contains;
