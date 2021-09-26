//====FONKSİYONLAR======
//! 1. YÖNTEM: function declaration
/* bu yöntem ile fonksiyonun tanımlanması, çağrılmasından
önce veya sonra olabilir.*/

//fonksiyonun tanımlanması
function yazdirAd() {
  console.log("hakan");
}
//fonksiyonun çağrılması
yazdirAd(); //hakan

//girilen sayının tek mi çift mi oldugunu gösteren bir fonk yaz

const sayiniz = prompt("sayı giriniz");

console.log(tekCift(sayiniz));

function tekCift(sayimiz) {
  return sayimiz % 2 == 0 ? `${sayimiz}çifttir` : `${sayimiz}tektir`;
}

//! 2. YÖNTEM: function expression
const tekCift1 = function (sayi) {
  return sayi % 2 == 0 ? "cift" : "tek";
};
console.log(tekCift1(5));

//en büyük sayıyı bulma
let buyukBul = function (a, b, c) {
  let enBuyuk;

  if (a > b && a > c) {
    enBuyuk = a;
  } else if (b > c && b > a) {
    enBuyuk = b;
  } else {
    enBuyuk = c;
  }
  return enBuyuk;
};

console.log(buyukBul(5, 8, 9));

//! 3. YÖNTEM: function arrow
//ornek
//const ciftMi=(sayi)=(sayi%2==0?"cift":"tek");

const ciftMi = (num) => (num % 2 == 0 ? `${num} = Cift` : `${num} = Tek`);

console.log("sayı " + ciftMi(7));

//ornek
const taban = prompt("taban gir");
const us = prompt("us girin");

const ustAl = (taban, us) => taban ** us;

console.log(ustAl(taban, us));
