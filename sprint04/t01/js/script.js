`use strict`

function addActors(oneMovie) {
  let ul = document.createElement("ul");

  for (let i = 0; i < oneMovie.actors.length; i++) {
    let li = document.createElement("li");

    li.textContent = oneMovie.actors[i];
    ul.append(li);
  }
  return ul;
}

function checkFavorite(id, page) {
  if (favorite.has(movies[id])) {
    movies[id].removeFromFavorite(movies[id]);
    if (page === "fav")
      addAllList([...favorite], page);
  }
  else
    movies[id].addToFavorite(movies[id]);
}

function showMovie(oneMovie, id, page) {
  let div = document.getElementById("promo");
  let value = document.createElement("img");

  div.innerHTML = "";
  value.src = oneMovie.image;
  div.append(value);
  value = document.createElement("div");
  value.className = "heart";
  value.onclick = () => checkFavorite(id, page);
  div.append(value);
  value = document.createElement("h2");
  value.textContent = oneMovie.title;
  div.append(value);
  value = document.createElement("span");
  value.textContent = oneMovie.date;
  div.append(value);
  div.append(addActors(oneMovie));
  value = document.createElement("p");
  value.textContent = oneMovie.info;
  div.append(value);
}

function addAllList(list, page) {
  let div = document.getElementById("list");

  div.innerHTML = ""
  if (list.length > 0) {
    list.forEach(element => {
      let btn = document.createElement("input");
      let index = movies.indexOf(element);

      btn.type = "button";
      btn.className = "btn-list";
      btn.onclick = () => showMovie(element, index, page);
      btn.value = element.title;
      div.append(btn)
    });
    showMovie(list[0], movies.indexOf(list[0]), page);
  }
  else {
    div.innerHTML = "<h3>Избраное пусто</h3>";
    document.getElementById("promo").innerHTML = "";
  }
}

addAllList(movies, "all");
