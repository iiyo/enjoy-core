
var each = require("./each");

//
// Turns an array of objects into an object where the keys are the
// values of a property of the objects contained wihtin the original array.
//
// Example:
//
//     [{name: "foo"},{name: "bar"}] => {foo: {name: "foo"}, bar: {name: "bar"}}
//

function expose (collection, key) {
    
    var result = {};
    
    each(function (item) {
        result[item[key]] = item;
    }, collection);
    
    return result;
}

module.exports = expose;
