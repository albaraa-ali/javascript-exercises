const sumAll = function (a, b) {
    let sum = 0;
    if (!(Number.isInteger(a) && a > 0 &&
        Number.isInteger(b) && b > 0)) return ("ERROR");
    else {
        if (a > b) {
            for (let i = b; i <= a; i++) {
                sum += i;
            }

        }
        else {
            for (let i = a; i <= b; i++) {
                sum += i;
            }
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
