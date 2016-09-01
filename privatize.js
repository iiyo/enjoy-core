
var each = require("./each");

//
// Turns an object into an array by putting its keys into the objects
// contained within the array.
//
// Example:
//
//     {foo: {}, bar: {}} => [{name: "foo"},{name: "bar"}]
//

function privatize (collection, key) {
    
    var result = [];
    
    each(function (item, currentKey) {
        
        item[key] = currentKey;
        
        result.push(item);
        
    }, collection);
    
    return result;
}

module.exports = privatize;
