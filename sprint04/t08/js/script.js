function addImages(images) {
  for (let i = 0; i < 20; i++) {
    let img = document.createElement("img");

    img.src = "assets/images/temp.png";
    innerHeight.src = "";
    img.width = "600";
    img.height = "400";
    img.dataset.src = images[i];
    document.getElementsByTagName("body")[0].append(img)
  }
}

function countImg(counter) {
  let div = document.getElementById("count");

  div.innerHTML = `${counter} images loaded from 20`;
  if (counter === 20) {
    div.style.background = "rgb(58, 189, 58)";
    setTimeout(() => {
      let del = document.getElementById("count");
      del.parentNode.removeChild(del);
    }, 3000);
    counter++;
  }
}

function loadImage(image) {
  if (image.src != image.getAttribute("data-src"))
    counter++;
  image.src = image.getAttribute("data-src");
  countImg(counter);
}

function showImg(img) {
  if (counter < 20) {
    img.forEach(single => {
      if (single.intersectionRatio > 0)
        loadImage(single.target)
    });
  }
}

let counter = 0;
let imagesSrc = [
  "https://zastavok.net/main/graphics/1417092481.jpg",
  "https://zastavok.net/main/games/158531448347.jpg",
  "https://zastavok.net/main/games/159397710539.jpg",
  "https://zastavok.net/main/games/158348898230.jpg",
  "https://zastavok.net/main/games/158531124475.jpg",
  "https://zastavok.net/main/games/158531292349.jpg",
  "https://zastavok.net/main/games/158531461026.jpg",
  "https://zastavok.net/main/games/158531196161.jpg",
  "https://zastavok.net/main/games/158531232516.jpg",
  "https://zastavok.net/main/games/157253538279.jpg",
  "https://zastavok.net/main/games/158348856263.jpg",
  "https://zastavok.net/main/games/1439671682.jpg",
  "https://zastavok.net/main/games/153755168091.jpg",
  "https://zastavok.net/main/games/153754701649.jpg",
  "https://zastavok.net/main/games/1428422317.jpg",
  "https://zastavok.net/main/games/1528282633.jpg",
  "https://zastavok.net/main/games/1528281464.jpg",
  "https://zastavok.net/main/games/1507485619.jpg",
  "https://zastavok.net/main/graphics/1507484355.jpg",
  "https://zastavok.net/main/games/153754681637.jpg"
];
const options = {
  threshold: 0.1
};
let images = document.getElementsByTagName("img");
const observer = new IntersectionObserver(showImg, options);

addImages(imagesSrc);
for (let i = 0; i < 20; i++) {
  observer.observe(images[i])
}

