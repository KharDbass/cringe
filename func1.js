"use strict";

const array = [5, 24, 51, 2, 5 , 10, 25, -2, 0, 1, 61, 24, -24, 91, 816, 692, -25];
let newArray = [];

let isNumberInRange = num => {
    if (num > 0){
        if (num < 10){
          return true;
        } else {
          return false;
        }
      } else {
        return false;
    }
}

for (let i = 0; i < array.length; i++) {
    if (isNumberInRange(array[i]) == true) {
        newArray.push(array[i]);
    }
}
console.log(newArray);