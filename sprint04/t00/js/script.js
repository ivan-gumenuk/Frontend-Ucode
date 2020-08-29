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

function addDoMagic(container) {
  let button = document.createElement("button");

  button.innerText = "DO MAGIC";
  button.id = "do-magic";
  container.append(button);
}

function addSayHello(container) {
  let button = document.createElement("button");

  button.innerText = "SAY HELLO";
  button.id = "say-hello";
  container.append(button);
}

function addProperties(prototype, container) {
  let properties = [];

  [...Object.entries(prototype)].forEach(([key, value]) => {
    if (key.startsWith("_") === false && typeof key !== "function") {
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
  addDoMagic(descriptions);
  document.getElementById("do-magic").onclick = function () {
    magician["do magic"]();
  };
  if (prototypeName !== "object") {
    addSayHello(descriptions);
    document.getElementById("say-hello").onclick = function () {
      magician["say hello"]();
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
}

function Creature(name, age, species, portrait) {
  this.name = name;
  this.age = age;
  this.species = species;
  this._portrait = portrait;
}

Creature.prototype["say hello"] = function () {
  console.log(`Hello my name is ${this.name}`);
}

function Human(name, age, species, portrait, job) {
  Creature.apply(this, arguments);
  this.job = job;
}

function Vampire(name, age, species, portrait, job, title) {
  Human.apply(this, arguments);
  this.title = title;
}

function Dog(name, age, species, portrait, color) {
  Creature.apply(this, arguments);
  this.color = color;
}

Human.prototype = Object.create(Creature.prototype);
Dog.prototype = Object.create(Creature.prototype);
Vampire.prototype = Object.create(Human.prototype);

Human.prototype.constructor = Human;
Vampire.prototype.constructor = Vampire;
Dog.prototype.constructor = Dog;

let human = new Human("Linda", 22, "human", `./assets/images/human.png`, "doctor");
let vampire = new Vampire("Vlad", 915, "vampire", `./assets/images/vampire.png`, "unemployed", "count");
let dog = new Dog("Fluffy", 3, "dog", `./assets/images/dog.png`, "brown");

applyPrototype({}, "object");