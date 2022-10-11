var random = Math.floor(Math.random() * 6) + 1;
var dic = "dice" + random + ".png";
var randomdiceimg = "" + dic;
document.querySelectorAll("img")[0].setAttribute("src", randomdiceimg);

var random2 = Math.floor(Math.random() * 6) + 1;
var image = "dice" + random2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", image);

if (random > random2) {
  document.querySelector("h2").innerHTML = "Player 1 is the winner";
} else if (random === random2) {
  document.querySelector("h2").innerHTML = "Its a draw";
} else {
  document.querySelector("h2").innerHTML = "Player 2 is the winner";
}
