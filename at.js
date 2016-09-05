
var auto = require("./auto");

function at (collection, key) {
    return collection[key];
}

module.exports = auto(at);
