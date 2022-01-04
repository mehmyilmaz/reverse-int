module.exports = function reverse (n) {
    n < 0 ? (n = n.toString().slice(1)) : (n = n.toString());
    return Number(n.toString().split("").reverse().join(""));
};
