function createTable(idTable) {
  let table = document.createElement("table");

  table.id = idTable;
  for (let i = 0; i < 10; i++) {
    let tr = document.createElement("tr");

    for (let j = 0; j < 3; j++) {
      let td = document.createElement("td")
      if (i == 0 && j == 0)
        td.id = "name";
      else if (i == 0 && j == 1)
        td.id = "strength";
      else if (i == 0 && j == 2)
        td.id = "age";
      tr.append(td);
    }
    table.append(tr);
  }
  document.body.append(table);
  return table;
}

function message(sort, order) {
  let res = order ? "DESC" : "ASC";

  document.getElementById("placeholder").style.backgroundColor = "rgb(128,128,128)";
  if (sort == 0)
    document.getElementById("placeholder").textContent = `Sorting by Name, order: ${res}`;
  else if (sort == 1)
    document.getElementById("placeholder").textContent = `Sorting by Strength, order: ${res}`;
  else
    document.getElementById("placeholder").textContent = `Sorting by Age, order: ${res}`;
}

function addValuesToTable(table, heroes) {
  let position = 0;

  for (let i = 0; i < 10; i++)
    for (let j = 0; j < 3; j++)
      table.rows[i].cells[j].textContent = heroes[position++];
}

function sortTable(row, sort) {
  let table = document.getElementById("table");
  let values = [];
  let res = [];

  for (let i = 1; i < 10; i++)
    values.push(table.rows[i]);

  res = values.sort((rowA, rowB) => {
    const a = rowA.cells[row].textContent;
    const b = rowB.cells[row].textContent;
    if (row == 0) {
      if (sort)
        return (a < b) ? 1 : -1;
      else
        return (a > b) ? 1 : -1;
    }
    else {
      if (sort)
        return (+a < +b) ? 1 : -1;
      else
        return (+a > +b) ? 1 : -1;
    }
  })
  res.unshift(table.rows[0]);
  for (let i = 0; i < 10; i++)
    table.append(res[i]);
  message(row, sort);
  addEvents(!sort);
}

function addEvents(sort) {
  let names = document.getElementById("name");
  let strength = document.getElementById("strength");
  let age = document.getElementById("age");

  names.onclick = function (event) { sortTable(0, sort) };
  strength.onclick = function (event) { sortTable(1, sort) };
  age.onclick = function (event) { sortTable(2, sort) };
}

let sort = true;
const table = createTable("table");
const heroes = ["Name", "Strength", "Age",
  "Captain Marvel", 97, 26,
  "Black Panther", 66, 53,
  "Captain America", 79, 137,
  "Iron Man", 88, 48,
  "Hulk", 80, 49,
  "Spider-Man", 78, 16,
  "Thor", 95, 1000,
  "Thanos", 99, 1000,
  "Yon-Rogg", 73, 52
];

document.getElementById("placeholder").textContent = "";
document.getElementById("notification").textContent = "";
addValuesToTable(table, heroes);
addEvents(sort);
