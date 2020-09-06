`use strict`

function printMenu(menu) {
  let div = document.getElementById("menu");

  for (let [key, value] of menu.entries()) {
    let category = document.createElement("ul");

    category.innerHTML = `${key.bold()}:`;
    div.append(category);
    for (let [catKey, catValue] of value.entries()) {
      let product = document.createElement("li");

      product.innerHTML = `${catKey} - ${catValue}$`;
      category.append(product);
    }
  }
}

let salads = new Map([
  ['greek salad', 5, 99],
  ['caesar salad', 7.99]
]);
let main = new Map([
  ['borsch', 9, 99],
  ['hodgepodge', 14.99]
]);
let desert = new Map([
  ['cake', 7, 99],
  ['ice cream', 4.99]
]);
let drinks = new Map([
  ['coffee', 3, 99],
  ['juice', 3.49]
]);
let menu = new Map([
  ['salads', salads],
  ['main dishes', main],
  ['desert', desert],
  ['drinks', drinks]
]);

printMenu(menu)