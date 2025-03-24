// function numberSum(num) {
//     if (num == 1) {
//         return 1
//     }
//     else {
//         return num + numberSum(num - 1);
//     }
// }

// console.log(numberSum(4))

// perpangkatan
function power(base, exponent) {
    if (exponent == 0)
        return 1;
    else
        return base * power(base, exponent - 1);
}

console.log(power(3, 3))