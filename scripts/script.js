// JavaScript Document

var ZoekButton = document.querySelector("header nav section:first-of-type button");
var ZoekVeld = document.querySelector("header nav section:last-of-type");

var TerugButton = document.querySelector("header nav section:last-of-type button")

ZoekButton.addEventListener("click", openMenu);
TerugButton.addEventListener("click", openMenu);

function openMenu() {
  ZoekVeld.classList.toggle("openSearch");
  console.log("test");
}




