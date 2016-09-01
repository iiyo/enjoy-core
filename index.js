/* eslint "global-require": "off" */

var toExport = {};

[
    "add",
    "apply",
    "at",
    "auto",
    "bind",
    "call",
    "contains",
    "divide",
    "each",
    "every",
    "expose",
    "filter",
    "find",
    "flip",
    "free",
    "getter",
    "has",
    "id",
    "join",
    "keys",
    "loop",
    "map",
    "mod",
    "multiply",
    "not",
    "partial",
    "picker",
    "pipe",
    "piped",
    "pluck",
    "privatize",
    "put",
    "putter",
    "reduce",
    "repeat",
    "reverse",
    "setter",
    "slice",
    "some",
    "sort",
    "split",
    "subtract",
    "toArray",
    "values"
].
forEach(function (name) {
    toExport[name] = require("./" + name);
});

module.exports = toExport;
