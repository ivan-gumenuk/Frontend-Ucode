`use strict`

class Human {
  constructor(firstName, lastName, gender, age, calories) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
    this.calories = calories;
    this.sleep = false;
    this.hungry = setInterval(() => {
      if (this.calories >= 34) {
        this.calories -= 33.5;
        caloriesUpdate(this.calories);
      }
      else {
        printMessage("I'm hungry!");
      }
    }, 10000);

    setTimeout(() => {
      if (this.calories < 500)
        printMessage("I'm hungry!");
    }, 5000);
  }

  sleepFor(sec) {
    if (this.sleep === false) {
      this.sleep = true;
      printMessage(`I'm sleeping for ${sec}second!`);
      setTimeout(() => {
        printMessage("I'm awake now!");
        this.sleep = false;
      }, (sec * 1000));
    }
    else
      printMessage(`I'm sleeping right now!`);
  }

  feed() {
    if (this.calories >= 500)
      printMessage("I'm not hungry!");
    else {
      printMessage(`Nom nom nom`);
      setTimeout(() => {
        this.calories += 200;
        printMessage(`So tasty (+200 calories)`);
        caloriesUpdate(this.calories);
        if (this.calories < 500)
          printMessage("I'm still hungry!");
      }, 10000);
    }
  }
}

class Superhero extends Human {
  constructor(firstName, lastName, gender, age, calories) {
    super(firstName, lastName, gender, age, calories);

    clearInterval(this.hungry);
    this.hungry = setInterval(() => {
      if (this.calories >= 41) {
        this.calories -= 40;
        caloriesUpdate(this.calories);
      }
      else {
        printMessage("I'm hungry");
      }
    }, 4990);
  }

  fly() {
    printMessage(`I'm flying!`);
    setTimeout(() => {
      printMessage("I'm Superman!");
    }, 10000);
  }

  fightWithEvil() {
    printMessage("Khh-chh... Bang-g-g... Evil is defeated!");
    setTimeout(() => {
      printMessage("I'm Superman!");
    }, 5000);
  }
}

let human = new Human("John", "Doe", "male", 35, 300)
addHuman(human);