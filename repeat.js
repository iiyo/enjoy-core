
var auto = require("./auto");

function repeat (fn, times) {
    for (var i = 0; i < times; i += 1) {
        fn();
    }
}

module.exports = auto(repeat);
