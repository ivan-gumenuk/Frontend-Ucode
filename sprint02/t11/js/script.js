"use strict"

const num = 7;
let multiplier = 1;
let res = '';

while (multiplier <= 10) {
  res += `${num} * ${multiplier} = ${num * multiplier}\n`;
  multiplier++;
}

alert(res);