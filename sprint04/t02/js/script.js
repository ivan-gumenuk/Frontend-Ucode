`use strict`

function doSleep() {
  let time = prompt("Please enter sleeping time(second)", 5);

  if (isNaN(time))
    alert("Incorrect enter");
  else
    human.sleepFor(time);
}

function turnSuperHero() {
  clearInterval(human.hungry);
  document.getElementById("human-image").src = "assets/image/superhero.png";
  document.getElementById("human-image").style = "height: 391px"
  human = new Superhero("John (Superman)", "Doe", "male", 35, 400);
  addHuman(human);
  printMessage("I'm Superman");
  document.getElementById("turn").value = "Fly";
  document.getElementById("turn").onclick = () => human.fly();
  let button = document.createElement("input");
  button.type = "button";
  button.value = "Fight with evil"
  button.onclick = () => human.fightWithEvil();
  document.getElementById("properties").append(button);
}