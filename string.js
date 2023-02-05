"use strict";
let
email = "pozor_ordi@gmail.com",
target = email.indexOf("@");
console.log(email.substring(0, 5) + "..." + email.substring(target));