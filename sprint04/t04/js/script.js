`use strict`

const magician = {
  _hat: './assets/images/hat.png',
  _getPortrait() {
    if (this._portrait) return this._portrait;
    else return './assets/images/magician.png';
  },
  'do magic'() {
    console.log(`ABRACADABRA The prototype of ${this.name} is `);
    console.log(Object.getPrototypeOf(this));
  }
};

function addButton(name, container) {
  let button = document.createElement("button");

  button.innerText = name;
  container.append(button);
  return button;
}

function addProperties(prototype, container) {
  let properties = [];

  [...Object.entries(prototype)].forEach(([key, value]) => {
    if (key.startsWith("_") === false && key !== "howl") {
      properties.push([key, value]);
    }
  });
  properties.forEach((property) => {
    let propertyHtml = `<p class="property">${property[0]}: <span class="propValue">${property[1]}</span></p>`;
    container.insertAdjacentHTML("beforeend", propertyHtml);
  });
}

function applyPrototype(prototype, prototypeName) {
  let descriptions = document.getElementById("properties");

  document.getElementById("head").src = magician._getPortrait();
  descriptions.innerHTML = "";
  addButton("DO MAGIC", descriptions).onclick = function () {
    magician["do magic"]();
  };
  if (prototypeName !== "object")
    addButton("SAY HELLO", descriptions).onclick = function () {
      magician["say hello"]();
    };

  if (prototypeName === "werewolf") {
    addButton("TRANSFORM", descriptions).onclick = function () {
      werewolf.transform();
    };
    if (werewolf._werewolf == true)
      addButton("HOWL", descriptions).onclick = function () {
        werewolf.howl();
      };
  }
  addProperties(prototype, descriptions);
}

function changePrototype(target, prototype, prototypeName) {

  document.getElementsByClassName("active")[0].classList.remove("active");
  target.classList.add("active");
  Object.setPrototypeOf(magician, prototype);
  applyPrototype(prototype, prototypeName);
}

function changeStatus(target) {
  let text = target.textContent;

  if (text === "no prototype")
    changePrototype(target, {}, "object");
  else if (text === "human prototype")
    changePrototype(target, human, "human");
  else if (text === "vampire prototype")
    changePrototype(target, vampire, "vampire");
  else if (text === "dog prototype")
    changePrototype(target, dog, "dog");
  else if (text === "werewolf prototype")
    changePrototype(target, werewolf, "werewolf");
}

class Creature {
  constructor(name, age, species, portrait) {
    this.name = name;
    this.age = age;
    this.species = species;
    this._portrait = portrait;
  }

  "say hello"() {
    console.log(`Hello my name is ${this.name}`);
  }
}


class Human extends Creature {
  constructor(name, age, species, portrait, job) {
    super(name, age, species, portrait);
    this.job = job;
  }
}

class Vampire extends Human {
  constructor(name, age, species, portrait, job, title) {
    super(name, age, species, portrait, job);
    this.title = title;
  }
}

class Dog extends Creature {
  constructor(name, age, species, portrait, color) {
    super(name, age, species, portrait);
    this.color = color;
  }
}

class Werewolf extends Human {
  constructor(name, age, species, portrait, job) {
    super(name, age, species, portrait, job);
    this._werewolf = false;
  }

  transform() {
    if (werewolf._werewolf === false) {
      werewolf._portrait = "./assets/images/werewolf.png";
      Object.assign(werewolf, werewolfHowl);
    }
    else {
      werewolf._portrait = "./assets/images/human.png";
      delete werewolf.howl;
    }
    werewolf._werewolf = !werewolf._werewolf;
    applyPrototype(werewolf, "werewolf");
  }
}

let human = new Human("Linda", 22, "human", `./assets/images/human.png`, "doctor");
let vampire = new Vampire("Vlad", 915, "vampire", `./assets/images/vampire.png`, "unemployed", "count");
let dog = new Dog("Fluffy", 3, "dog", `./assets/images/dog.png`, "brown");
let werewolf = new Werewolf("Rachel", 18, "werewolf", "./assets/images/human.png", "teacher");
let werewolfHowl = {
  howl() {
    console.log("ARH-WOOOOOOOOOOOOOOOOOOOO");
  }
};

applyPrototype({}, "object");