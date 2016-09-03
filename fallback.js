
var auto = require("./auto");

function fallback (fn, instead) {
    try {
        return fn();
    }
    catch (error) {
        return instead(error);
    }
}

module.exports = auto(fallback);
