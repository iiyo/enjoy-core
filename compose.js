
var apply = require("./apply");
var pipe = require("./pipe");
var toArray = require("./toArray");

function compose () {
    
    var functions = toArray(arguments);
    
    return function (value) {
        
        var args = functions.slice();
        
        args.unshift(value);
        
        return apply(pipe, args);
    };
}

module.exports = compose;
