"use strict";
let time = Math.round(Math.random() * 2000 + 3600)
console.log((time / 3600).toFixed(2), "Время в часах");
console.log((time / 60).toFixed(2), "Время в минутах");
console.log(time, "Время в секундах");