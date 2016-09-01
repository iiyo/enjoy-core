
var some = require("./some");
var auto = require("./auto");

function every (fn, collection) {
    
    var result = true;
    
    some(someToEvery, collection);
    
    function someToEvery (item, key) {
        
        if (!fn(item, key, collection)) {
            result = false;
            return true;
        }
        
        return false;
    }
    
    return result;
}

module.exports = auto(every);
