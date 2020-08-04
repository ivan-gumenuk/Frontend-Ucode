"use strict";

let str1 = "You're catnip to a girl like me. Handsome, dazed,and to die for...";
const len = str1.length;
let index = str1[2];
let str2 = `Laurel Hedare: "Game over."`;
let str3 = `Selina Kyle: catwoman"Mmm seemsCatwomanlike everyCatWomanwoman you try to save windsCatWOMANup dead... or deeply resentful."`;

str3 = str3.replace("catwoman", " ");
str3 = str3.replace("Catwoman", " ");
str3 = str3.replace("CatWoman", " ");
str3 = str3.replace("CatWOMAN", " ");
alert(`Just string: ${str1}
Length: ${len}
Character number 2 is: ${index}
To uppercase ${str1.toUpperCase()}
Concatenation in a phrase: ${str1} - Catwoman
[Batman Returns] Batman: "I tried to save you."
${str3}`);
