//===========GETELEMENTID=========
const paragraf = document.getElementById("para").style;
paragraf.backgroundColor = "black";
paragraf.color = "white";
paragraf.fontSize = "20px";

const buton = document.getElementById("btn");
buton.style.width = "100px";
buton.style.color = "red";
buton.style.fontSize = "18px";
buton.textContent = "ARA"; //text content taglerin icindeki
//yaziyi degistirmek icin kullanilir

//===========GETELEMENTBYTAGNAME==========
const resim = document.getElementsByTagName("img");
resim[0].style.width = "300px";
resim[0].style.height = "300px";
resim[1].style.border = "3px solid red";

//===========GETELEMENTBYCLASSNAME==========
//? burdaki classtan kasıt tag name. bizim verdigimiz class ismi degil
//! yukardaki bilgi yanlis olabilir
const baslik = document.getElementsByClassName("h1");
baslik[0].style.textAlign = "center";

//=============QUERYSELECTOR===============
//! en cok kullanilan cagirma yontemidir
document.querySelector(".arama").textContent = "DOM selector kavramı 🙂";

document.querySelector("#govde").style.backgroundImage =
  "linear-gradient(green,blue,pink)";

//==============EVENT============
// TODO onmouseover and onmouseout
const h = document.querySelector(".h1");
h.onmouseover = function () {
  h.style.color = "red";
  h.style.backgroundColor = "white";
};
h.onmouseout = function () {
  h.style.color = "pink";
  h.style.backgroundColor = "orange";
};
//1.resme tikladigimizda imgler yer degistirsin
document.querySelector(".bir").onclick = function () {
  document.querySelector(".bir").src = "img/logo2.png";
  document.querySelector(".iki").src = "img/js_logo.png";
};
