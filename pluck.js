
var map = require("./map");

function pluck (collection, key) {
    
    var result = [];
    
    map(function (item) {
        if (key in item) {
            result.push(item[key]);
        }
    }, collection);
    
    return result;
}

module.exports = pluck;
