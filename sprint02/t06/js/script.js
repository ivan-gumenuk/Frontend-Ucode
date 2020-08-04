"use strict";

const number = Number(12);
const myBigInt = BigInt(9007199254740991);
const str = String("Hello");
const boolean = Boolean(true);
const myNull = null;
const myUndefined = undefined;
const obj = {};
const mySymbol = Symbol("description");
const myFunc = function() {};

alert(`Number is ${typeof number}
MyBigInt is ${typeof myBigInt}
Str is ${typeof str}
Boolean is ${typeof boolean}
MyNull is ${typeof myNull}
MyUndefined is ${typeof myUndefined}
Obj is ${typeof obj}
MySymbol is ${typeof mySymbol}
MyFunc is ${typeof myFunc}`)