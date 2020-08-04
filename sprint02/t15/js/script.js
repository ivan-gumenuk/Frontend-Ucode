"use strict"

function checkDivision(beginRange, endRange) {
  let result = "";

  if (beginRange === null || isNaN(+beginRange))
    beginRange = 1;
  if (endRange === null || isNaN(+endRange))
    endRange = 100;
  if (+beginRange > +endRange) {
    let tmp = beginRange;
    beginRange = endRange;
    endRange = tmp;
  }
  for (let i = +beginRange; i <= +endRange; i++) {
    if (i % 2 === 0) {
      result = `${i} `;
      result += "is even";
    }
    if (i % 3 === 0) {
      result ? result += ', ' : result = `${i} `;
      result += "is a multiple of 3";
    }
    if (i % 10 === 0) {
      result ? result += ', ' : result = `${i} `;
      result += "is divisible by 10";
    }
    console.log(result ? result : `${i} -`);
    result = "";
  }
}

let beginRange = prompt("Begin range is ...", "1");
let endRange = prompt("End range is ...", "100");

checkDivision(beginRange, endRange);
