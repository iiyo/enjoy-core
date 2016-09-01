
var each = require("./each");
var auto = require("./auto");

function filter (fn, collection) {
    
    var items = [];
    
    each(applyFilter, collection);
    
    function applyFilter (item, key) {
        if (fn(item, key, collection)) {
            items.push(item);
        }
    }
    
    return items;
}

module.exports = auto(filter);
