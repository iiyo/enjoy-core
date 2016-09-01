
function bind (fn) {
    
    var args = [].slice.call(arguments);
    
    args.shift();
    
    return function () {
        
        var allArgs = args.slice(), i;
        
        for (i = 0; i < arguments.length; i += 1) {
            allArgs.push(arguments[i]);
        }
        
        return fn.apply(undefined, allArgs);
    };
}

module.exports = bind;
