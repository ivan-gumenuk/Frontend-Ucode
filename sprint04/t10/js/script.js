`use strict`

function addCompere(hero) {
  if (compere.length > 19)
    alert("Max hero amount!");
  else {
    compere.push(hero);
    document.getElementById("compare-button")
      .innerHTML = `Compere (${compere.length})`;
  }
}

function addHeroButtons(list) {
  let div = document.getElementById("hero-list");
  let heros = list;

  div.innerHTML = "";
  for (let i = 0; i < heros.length; i++) {
    let but = document.createElement("button");
    but.innerHTML = `${heros[i].name}<br>${heros[i].biography["full-name"]}`;
    but.onclick = function () {
      addCompere(heros[i]);
      but.classList.add("checked")
    };
    div.append(but);
  }
}

function getHeroApi(request, button) {
  let token = "687235068538819";
  let heros = `https://superheroapi.com/api/${token}`;
  let proxy = "https://cors-anywhere.herokuapp.com/";

  fetch(`${proxy}${heros}/${request}`)
    .then((response) => {
      let data = response.json();
      return data;
    })
    .then((data) => {
      if (data.response == "error")
        alert(data.error)
      else {
        if (button === 1)
          addHeroButtons(data.results)
        else if (button === 2) {
          let hero = []
          hero.push(data);
          addHeroButtons(hero)
        }
      }
    });
}

function randomHero() {
  let id = Math.floor(Math.random() * Math.floor(731));
  getHeroApi(id, 2);
}

function searchHero() {
  let input = document.getElementById("input-hero");
  let message = input.value.trim();

  input.value = "";
  if (message && message.length > 0)
    getHeroApi(`search/${message}`, 1);
}

function resetHero() {
  compere = [];
  document.getElementById("compare-button")
  .innerHTML = `Compere (0)`;
  let clear = document.getElementsByClassName("checked");
  while (clear[0]) {
    clear = document.getElementsByClassName("checked")
    for (let i = 0; i < clear.length; i++)
      clear[i].classList = "";
  }
}

let compere = [];