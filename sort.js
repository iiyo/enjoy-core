
var free = require("./free");
var slice = require("./slice");
var compose = require("./compose");

module.exports = compose(slice, free(Array.prototype.sort));
