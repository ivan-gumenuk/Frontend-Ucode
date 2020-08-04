"use strict"

var quote;

alert(quote);
quote = "With great power, comes great responsibility.";
alert(quote);

function displayAuthor() {
  var author = "Spiderman";

  alert(author);
  quote = "...";
}//we create, but don't call it

displayAuthor();
alert(quote);