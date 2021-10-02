//-------------DIZILERDE ITERASYON-------------

//todo -----------FOR DONGUSU-------------

//pozitiflerin ve negatiflerin kendi aralarinda toplami
const koordinatlar = [120, 100, -100, 220, 330, -50];
let pozitif = 0;
let negatif = 0;

for (let i = 0; i < koordinatlar.length; i++) {
  koordinatlar[i] < 0
    ? (negatif = negatif + koordinatlar[i])
    : (pozitif = pozitif + koordinatlar[i]);
}
console.log(
  `negatifler toplami: ${negatif} / pozitiflerin toplami: ${pozitif}`
);

//todo-----------FOR IN DONGUSU---------------
const koordinatlar2 = [120, 100, -100, 220, 330, -50];

for (let i in koordinatlar2) {
  koordinatlar2[i] < 0
    ? (negatif = negatif + koordinatlar2[i])
    : (pozitif = pozitif + koordinatlar2[i]);
}
console.log(
  `negatifler toplami: ${negatif} / pozitiflerin toplami: ${pozitif}`
);

// SORU: Bir hayvanat bahçesinde bulunan hayvan türlerinin
// bir dizide saklandığını varsayalım.Bu hayvanları türüne
// göre aramamızı sağlayacak ve o türden kaç adet bulunduğunu
//  ana programa döndürecek fonksiyonu yaziniz. Eğer o
// türden bir hayvan yok ise bulunamadığını yazdırsın.

const hayvanlar = [
  "aslan",
  "fil",
  "kartal",
  "kanarya",
  "aslan",
  "aslan",
  "timsah",
];
/*const ara = prompt("sayısını merak ettigin hayvanın adını yaz");
const bulDondur = function (ara) {
  let hayvanSayisi = 0;
  for (let i in hayvanlar) {
    if (hayvanlar[i] == ara) {
      hayvanSayisi++;
    }
  }
  hayvanSayisi == 0
    ? alert("aradiginiz hayvan bulunamadi")
    : alert(`aradiginiz ${ara} hayvanindan ${hayvanSayisi} tane bulunmaktadir`);
};

bulDondur(ara);*/

//todo--------------FOR OF DONGUSU----------------
// for of dongusu, for in dongusunun bir cok veri yapisini kapsayacak sekilde
//guncellenmis halidir. Bu dongude dizi icersindeki veriye
//erisirken indisleme kullanmaya gerek yoktur.

let arabalar = ["BMW", "Volvo", "Mini"];
for (let i of arabalar) {
  console.log(i);
}

//todo--------------FOR EACH--------------------
//! for each orjinal diziyi bozmaz
let ogrenciler = ["Onur", "Hakan", "Furkan"];
ogrenciler.forEach((x) => console.log(x));
ogrenciler.forEach((deger, index) =>
  console.log(index + ".kişi" + deger + "dır")
);

//todo --------------MAP METHODU-----------------
//! map methodu orjinal diziyi degistirmez
//butun elemanlarin uc katini alin
const rakamlar = [3, 5, 3, 2, 6, 7, 9];
console.log(rakamlar.map((x) => x * 3));
console.log(
  rakamlar.map((x, index) => `${index + 1}.elemanın 3 katı ${x * 3}`)
);

//ornek: isimler dizisinin icerisindeki her ismi buyuk harf
//olarak yeni bir diziye sakla
const isimler = [
  "Ahmet",
  "mehmet",
  "ismet",
  "SAFFET",
  "Can",
  "Canan",
  "Cavidan",
];
const buyuk = isimler.map((isim) => isim.toUpperCase());
console.log(buyuk);

document.querySelector(".baslik").textContent = buyuk.join("->");

//todo----------FILTER METHODU-----------------
//ornek:fiyatlar dizisindeki 250 den buyuk harfleri yazdir
const fiyatlar = [120, 300, 234, 375, 400];
const yeni = fiyatlar.filter((t) => t > 250);
console.log(yeni);

//-------------- ÖRNEK -------------------
// maası 4000 $’dan düsük olanlara %50 zam yapmak istiyoruz
// ve bunu ayri dizi olarak saklamak istiyoruz.
const maaslar = [3000, 5000, 4000, 6000, 6500];
const zamli = maaslar.filter((a) => a < 4000).map((a) => a * 1.5);
console.log(zamli);

//-------------- ÖRNEK -------------------
//ilk harfi a olanlari console da yazdir
const adlar = [
  "Samet",
  "Hakkı",
  "Duygu",
  "Emrullah",
  "Bilal",
  "Ali",
  "ahmet",
  "Hasan",
  "Defne",
  "Serdar",
];
adlar
  .filter((x) => x.startsWith("A") || x.startsWith("a"))
  .forEach((x) => console.log(x));

  //todo-------------REDUCE METHODU---------------
  //! reduce cikis methodudur. bundan sonra foreach calismaz
  const maaslarim=[3000,5000,4000,2000,1000];
  console.log(maaslarim.reduce((x,y)=>x+y,0));

