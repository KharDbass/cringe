"use strict";

age(1, 17, "ребенок");
age(18, 30, "молодой");
age(31, 55, "зрелый");
age(56, 100, "старый");

function age(b, e, s) {
    for (let i = b; i <= e; i++) console.log(`${i} - ${s}`);
}