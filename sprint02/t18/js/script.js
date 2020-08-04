"use strict"

function mySort(a, b) {
  if (a % 2 == 0 && b % 2 == 0)
    return a - b;
  else if (a % 2 == 0)
    return -1;
  else if (b % 2 == 0)
    return 1;
  else
    return a - b;
}

function sortEvenOdd(arr) {
  if (arr)
    arr.sort(mySort);
}