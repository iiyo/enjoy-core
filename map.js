
var each = require("./each");
var auto = require("./auto");

function map (fn, collection) {
    
    var items = [];
    
    each(function (item, key) {
        items.push(fn(item, key, collection));
    }, collection);
    
    return items;
}

module.exports = auto(map);
