function filterDuplicateAndSpaces(str) {
  let result = str.split(" ");

  result = result.filter(word => word.length > 0);
  result = result.filter((word, index) => result.indexOf(word) === index);
  return result;
}

function addWords(obj, wrds) {
  let words = filterDuplicateAndSpaces(obj.words);
  let newWord = filterDuplicateAndSpaces(wrds);
  let result;

  result = words.concat(newWord);
  obj.words = result.filter((word, index) => result.indexOf(word) === index).join(' ');
}

function removeWords(obj, wrds) {
  let words = filterDuplicateAndSpaces(obj.words);
  let newWord = filterDuplicateAndSpaces(wrds);
  let result = [];

  for (let i = 0; i < words.length; i++)
    if (newWord.indexOf(words[i]) == -1)
      result.push(words[i]);

  obj.words = result.join(' ');
}

function changeWords(obj, oldWrds, newWrds) {
  let words = filterDuplicateAndSpaces(obj.words);
  let arrOld = filterDuplicateAndSpaces(oldWrds);
  let arrNew = filterDuplicateAndSpaces(newWrds);
  let whichChange = 0;

  for (let i = 0, index; i < arrOld.length && arrNew[whichChange]; i++) {
    index = words.indexOf(arrOld[i]);
    if (index != -1) {
      words.splice(index, 1, arrNew[whichChange])
      whichChange++;
    }
  }
  obj.words = words.join(' ');
}

// const obj = {
//   words: 'newspapers     newspapers  books magazines'
// };

// console.log(obj);
// addWords(obj, 'radio newspapers');
// console.log(`"${obj.words}" -like-> {words: "newspapers books magazines radio"}`);

// console.log(obj)
// removeWords(obj, 'newspapers   radio');
// console.log(`"${obj.words}" -like-> {words: "books magazines"}`);

// console.log(obj)
// changeWords(obj, 'books radio  magazines', 'tv   internet');
// console.log(`"${obj.words}" -like-> {words: "tv internet">`);