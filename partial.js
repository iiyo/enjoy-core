
var apply = require("./apply");

function partial (fn) {
    
    var args = Array.prototype.slice.call(arguments, 1);
    
    return function () {
        
        var callArgs = Array.prototype.slice.call(arguments);
        
        var allArgs = args.map(function (arg) {
            
            if (typeof arg === "undefined") {
                return callArgs.shift();
            }
            
            return arg;
        });
        
        if (callArgs.length) {
            callArgs.forEach(function (arg) {
                allArgs.push(arg);
            });
        }
        
        return apply(fn, allArgs);
    };
}

module.exports = partial;
