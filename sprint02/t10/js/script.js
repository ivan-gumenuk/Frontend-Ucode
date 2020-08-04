"use strict"

function alertHero(hero) {
  if (hero.gender == "male" && +hero.age < 18)
    alert(`The superhero name is: ${hero.name}-boy!`);
  else if (hero.gender == "male" && +hero.age >= 18)
    alert(`The superhero name is: ${hero.name}-man!`);
  else if (hero.gender == "female" && +hero.age < 18)
    alert(`The superhero name is: ${hero.name}-girl!`);
  else if (hero.gender == "female" && +hero.age >= 18)
    alert(`The superhero name is: ${hero.name}-woman!`);
  else if (!hero.gender.length && +hero.age < 18)
    alert(`The superhero name is: ${hero.name}-kid!`);
  else if (!hero.gender.length && +hero.age >= 18)
    alert(`The superhero name is: ${hero.name}-hero!`);
}

function superheroNameMaker() {
  let hero = {};
  let name = /^[a-zA-Z]{1,20}$/;
  let gender = /^(male|female|)$/i;
  let age = /^[1-9]\d{1,4}$/;

  hero.name = prompt("What animal is the superhero most similar to?");
  if (!name.exec(hero.name) || hero.name == null) {
    alert("Animal name is wrong!\nOne word, only letters, from 1 to 20 letters max.");
    return;
  }
  hero.gender = prompt("Is the superhero male or female? Leave blank if unknown or other.");
  if (!gender.exec(hero.gender)) {
    alert("Gender is wrong!\nType only male, female or blank (not case sensitive)");
    return;
  }
  hero.age = prompt("How old is the superhero?");
  if (!age.exec(hero.age)) {
    alert("Age is wrong!\nMax length 5, only digits, can't start from zero!");
    return;
  }
  alertHero(hero);
}

superheroNameMaker();