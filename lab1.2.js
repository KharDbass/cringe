"use strict";
let
a = 62.714513661,
b = 14.711435187,
n = 2,
a1 = ((a - Math.floor(a))).toFixed(n),
b1 = ((b - Math.floor(b))).toFixed(n);
if (a1 == b1) {
    console.log("True");
} else {
    console.log("False");
}
console.log(a1, b1);