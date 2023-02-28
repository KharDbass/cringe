"use strict";
const x = Math.round(Math.random() * 10),
array = [];
for (let i = 3; i <=7; i++) {
    array.push(i);
}
console.log(x);
if (array.includes(x)) {
    console.log("Victory");
} else {
    console.log("Defeat");
}