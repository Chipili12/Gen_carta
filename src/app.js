/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  genero();
  document.getElementById("myBtn").addEventListener("click", function() {
    altanc();
    borro();
    genero();
  });
};
let borro = function() {
  const box = document.getElementById("header");
  box.className = "";
  const box2 = document.getElementById("footer");
  box2.className = "";
};
let genero = function() {
  borro();
  let tipo = clase();
  var element = document.getElementById("header");
  element.classList.add(tipo);
  var element2 = document.getElementById("footer");
  element2.classList.add(tipo);
  document.getElementById("numero").innerHTML = numero(tipo);
};
let clase = function() {
  let rand = Math.floor(Math.random() * 4);
  let suit = ["spades", "clubs", "diamonds", "hearts"];
  return suit[rand];
};

let numero = function(genero) {
  if (genero == "diamonds" || genero == "hearts") {
    document.querySelector("h1").style.color = "red";
  } else {
    document.querySelector("h1").style.color = "black";
  }
  let numcard = Math.floor(Math.random() * 13 + 1);
  if (numcard == 1) {
    return "A";
  }
  if (numcard == 11) {
    return "J";
  }
  if (numcard == 12) {
    return "Q";
  }
  if (numcard == 13) {
    return "K";
  } else {
    return numcard;
  }
};
setInterval(genero, 10000);
var timeleft = 9;
var timer = setInterval(function() {
  if (timeleft <= 0) {
    document.getElementById("countdown").innerHTML =
      timeleft + " seconds remaining";
    timeleft = 10;
  } else {
    document.getElementById("countdown").innerHTML =
      timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);
let altanc = function() {
  let ancho = document.getElementById("width1").value;
  let alto = document.getElementById("height1").value;
  document.getElementById("Carta").style.width = ancho + "px";
  document.getElementById("Carta").style.height = alto + "px";
};
