
function loop (fn) {
    while (fn()) {
        /* do nothing */
    }
}

module.exports = loop;
