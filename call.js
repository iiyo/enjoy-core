
function call (fn) {
    
    var args = [].slice.call(arguments);
    
    args.shift();
    
    return fn.apply(undefined, args);
}

module.exports = call;
