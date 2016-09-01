
function free (method) {
    return Function.prototype.call.bind(method);
}

module.exports = free;
