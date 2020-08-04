"use strict"

function solver(a, b, c, d, e) {
  if (typeof a === 'number' && typeof b === 'number' &&
      typeof c === 'number' && typeof d === 'number' &&
      typeof e === 'number') {
    return Math.trunc(((a * a) - (5 * b * c) + (d / 3) + e) * 100) / 100;
  }
  return "Wrong input";
}

