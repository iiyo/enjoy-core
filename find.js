
var some = require("./some");
var auto = require("./auto");

function find (fn, collection) {
    
    var value;
    
    some(function (item, key) {
        
        if (fn(item, key, collection)) {
            value = item;
            return true;
        }
        
        return false;
        
    }, collection);
    
    return value;
}

module.exports = auto(find);
