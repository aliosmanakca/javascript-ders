//ara butonuna tıklandıgında calan telefon cıksın ve zil calsın
let resim = document.querySelector(".resim");
let ring = document.querySelector(".ses");

document.querySelector(".on").onclick = function () {
  resim.src = "./img/img.gif"; //resim değiştirdim
  ring.play(); // sesi açtım
};

//baglat butonuna basinca gif gelsin ve ses kesilsin
document.querySelector(".off").onclick = function () {
  resim.src = "./img/telbağla.gif";
  ring.pause(); //
};

//konus butonuna basinca yeni gif gelsin
document.querySelector(".speak").onclick = function () {
  resim.src = "./img/telfırlat.gif";
};
//ekle butonuna basıldığında yeni bir li ekle upuzun yol
// // yeni girilen satiri saklamak icin bir li olusturduk.
//  // const yeniLi = document.createElement("li");
//  // yeni li icin textnode olusturduk
//  // const textNode = document.createTextNode(satir.value);
//  //olusturdugumuz texnode'u yeni li'ye bagladik.
//  // yeniLi.appendChild(textNode);
//  // yeni eklenen satiri var olan listeye (ul) baglayalim.
//  // liste.appendChild(yeniLi);

const liste = document.querySelector(".liste"); // dillerin girili olduğu listeye ulaştık

//ekle butonuna basıldıgında listeye yazdıgımız seyi eklesin
document.querySelector(".ekle").onclick = function () {
  // ekle butonuna ulaştık
  const giris = document.querySelector(".dil"); //dil girişi yapılan inputa ulaştık
  liste.innerHTML = liste.innerHTML + `<li>${giris.value}</li>`; //listeye inputa girilen değerleri liste olarak ekledik
  giris.value = ""; //inputa girilen değeri ekleyince inputtan silinmesi için
};

//sil butonuna tıklandığında li elemanı silinsin
document.querySelector(".sil").onclick = function () {
  //sil butonuna ulaştık
  liste.removeChild(liste.lastChild); //listenin çocuklarından listenin son çocuğunu sildik
};

//!  SAYFAMIZ BİTMEDİ KÜÇÜK BÜYÜK KISMINI DAHA YAPMADIK
