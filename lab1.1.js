"use strict";
let
x1 = 4,
y1 = 8,
x2 = 2,
y2 = 7,
x = y1 - y2,
y = x2 - x1;
if (x < 0 && y < 0) {
    console.log(x * y);
} else if (x < 0) {
    x = y2 - y1;
    console.log(x * y);
} else if (y < 0) {
    y = x1 - x2;
    console.log(x * y);
}