`use strict`

function getDay(data, num) {
  let day = {};
  let apiDate = data.list[num].dt_txt;

  day.date = `${apiDate.slice(8, 10)}.${apiDate.slice(5, 7)}`;
  day.weather = data.list[num].weather[0].description;
  day.weather = day.weather.slice(0, 1).toUpperCase() +
    day.weather.slice(1);
  day.temp = Math.trunc(data.list[num].main.temp - 273.15);
  day.icon = `${data.list[num].weather[0].icon}.png`;
  return day;
}

function addDay(day) {
  let div = document.createElement("div");
  let tmp = document.createElement("div");

  div.dataset.tooltip = day.weather;
  tmp.className = "date";
  tmp.innerHTML = `<span>${day.date}</span>`;
  div.append(tmp);
  tmp = document.createElement("div");
  tmp.innerHTML = `<img src="assets/icons/${day.icon}" alt="${day.weather}">`;
  div.append(tmp);
  tmp = document.createElement("div");
  tmp.className = "temperature";
  tmp.innerHTML = `<span>${day.temp}°C</span>`;
  div.append(tmp);
  return div;
}


function addWeather(data) {
  let div = document.getElementById("weather-box");
  if (data) {
    for (let i = 0; i < 40; i += 8)
      div.append(addDay(getDay(data, i)))
  }
}

function getApi() {
  let key = "cef07c0c3aa0378146e49d12ff20e6fb";
  let api = `http://api.openweathermap.org/data/2.5/forecast?id=703447&appid=${key}`;

  fetch(api)
    .then((response) => {
      let data = response.json();
      return data;
    })
    .then((data) => {
      addWeather(data)
    });
}

getApi();