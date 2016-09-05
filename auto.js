
var slice = require("./slice");
var apply = require("./apply");

//
// **auto(fn[, arity])**
//
// Wraps `fn` so that if it is called with less arguments than `fn`'s arity,
// a partial application is done instead of calling the function. This means that you can do this:
//
//     each(fn)(collection);
//
// Instead of this:
//
//     each(fn, collection);
//

function auto (fn, arity) {
    
    arity = arguments.length >= 2 ? arity : fn.length;
    
    function wrap () {
        
        var args = slice(arguments);
        
        return (
            args.length >= arity ?
            apply(fn, args) :
            function () { return apply(wrap, args.concat(slice(arguments))); }
        );
    }
    
    return wrap;
}

module.exports = auto;
