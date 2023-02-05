"use strict";
let password = "1234";
if (password.includes("-") || password.includes("_") && password.length >= 4) {
    console.log("Пароль надёжный");
} else {
    console.log("Пароль ненадёжный");
}