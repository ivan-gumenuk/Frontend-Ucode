"use strict"

let superTeam = {};
let result = "Here's the team\n";
let tmp;

superTeam["title"] = prompt("String with the name of the team.");
superTeam["leader"] = prompt("String with the name of the team's leader.");
tmp = prompt(`Array of strings with the names of the members of the team,
they should be separated by a comma.`);
if (tmp != null) {
  superTeam["members"] = tmp.split(',');
  superTeam["memberCount"] = superTeam.members.length + 1;
}
else {
  superTeam["members"] = ['none'];
  superTeam["memberCount"] = 0;
}
superTeam["agenda"] = prompt("String describing what are the goals and ideas of the team.");
superTeam["isEvil"] = Boolean(prompt("Boolean that explains whether the team is evil or not"));

for (let [key, value] of Object.entries(superTeam))
  result += `${key} - ${value}\n`;

alert(result);