function fullName(fname, callback) {
    return "Welcome " + callback(fname);
}
let maleInfo = function (fname) {
    return "Mr " + fname;
};
let femaleInfo = function (fname) {
    return "Miss " + fname;
};
console.log(fullName("Henry", maleInfo));
console.log(fullName("Hilda", maleInfo));
console.log(fullName("Ajay", function (fname) {
    return "Mr " + fname;
}));
