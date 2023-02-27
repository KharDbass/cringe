"use strict";
const styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor(styles.length / 2)] = "Классика";
console.log(styles[0]);
styles[0] = "";
styles.unshift("Рэп", "Регги");
console.log(styles);