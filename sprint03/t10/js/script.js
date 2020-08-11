function moveSlide(left) {
  if (interval) {
    clearInterval(interval);
    interval = null;
  }
  if (left)
    number = number - 1 < 0 ? imgSrc.length - 1 : number - 1;
  else
    number = number + 1 >= imgSrc.length ? 0 : number + 1;
  image.src = imgSrc[number];
}

let number = 0;
let image = document.getElementById("img");
let imgSrc = [
  "https://picstatio.com/large/9on56r/i-love-game-gaming-wallpaper.jpg",
  "https://picstatio.com/large/e956bd/2020-game-gang-pubg.jpg",
  "https://picstatio.com/large/932229/battlefield-soldier-game.jpg",
  "https://picstatio.com/large/0d02d5/War-Thunder-game-tanks.jpg",
  "https://picstatio.com/large/c15e00/warrior-ciri-the-witcher.jpg",
  "https://picstatio.com/large/c26351/warrior-assassins-creed-valhalla.jpg",
];

image.src = imgSrc[0];

let interval = setInterval(() => {
  number = ++number >= imgSrc.length ? 0 : number++;
  image.src = imgSrc[number];
}, 3000);
