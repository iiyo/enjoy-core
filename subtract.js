
function subtract () {
    return Array.prototype.reduce.call(arguments, function (a, b) { return a - b; });
}

module.exports = subtract;
