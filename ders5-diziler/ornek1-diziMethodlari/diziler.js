const yaslar = [5, 10, 28, 42];

const isimler = [
  "hakan",
  "furkan",
  "ahmet",
  "alaaddin",
  20,
  40,
  true,
  23.5,
  yaslar,
];
console.log(isimler);
console.log(isimler[3]);
console.log((isimler[3] = "said"));
console.log(isimler); /* const degistirilemiyordu ama non
primitivelerde degistirilebiliyor.dizi bir adres gosterir isimler gibi,
o yuzden primitive den farkli*/
isimler[isimler.length - 2] = false;
console.log(isimler[isimler.length - 2]);
console.log(isimler[8][1]);

//todo DIZIYI DEGISTIREN METHODLAR

let meyveler = ["elma", "armut", "muz", "kivi"];
const baslik = document.querySelector(".baslik");
baslik.textContent = meyveler;

//? pop() en son elemani siler
//log icinde yazdirirsaniz da sildigini yazdirir
console.log(meyveler.pop()); // console da kivi yazdirir
baslik.textContent = meyveler; //elma,armut,muz

//? shift() dizinin ilk elemanini siler
//yazdirirsak da sildigi elemani dondurur
console.log(meyveler.shift());
baslik.textContent = meyveler;

//? push() dizinin sonuna eleman ekler
meyveler.push("cilek");

//? unshift() dizinin basina eleman ekler
meyveler.unshift("karpuz");

//? reverse()dizinin tamamini ters cevirir
meyveler.reverse();

//? sort()diziyi natural order alfabetik olarak siralar
meyveler.sort();

//? splice()
meyveler.splice(1, 0, "erik"); // 0 olursa silmeden ekler

meyveler.splice(3, 1, "uzum"); // 1 olursa silip ustune yazar

console.log(meyveler);
baslik.textContent = meyveler;

//todo DIZI ERISIM METHODLARI (DIZIYI DEGISTIRMEZLER)
const sayilar = [3, 4, 5, 2, "2", "uc", "bes", 5, 2, 7];

console.log(sayilar);
baslik.textContent = sayilar;

//? includes() kapsiyormu
console.log(sayilar.includes("5")); //false
console.log(sayilar.includes(5)); //true

//?indexOf() ilk eslesen index i dondurur
console.log(sayilar.indexOf(2)); //3
console.log(sayilar.indexOf(5)); //7
console.log(sayilar.indexOf(2, 4)); // 4. indexten sonraki 2 yi bulur

//? join() dizinin elemanlarini birlestirip string hale getirir
//default olarak virgullerden ayirarak diziden kurtarir
console.log(sayilar.join("-"));

//? toString() join gibidir ama sadece virgullerle ayirir
console.log(sayilar.toString());

//------------------------------------------------
const arabalar = ["bmw", "mercedes", "Volvo", "sahin", "anadol"];
//? slice()
console.log(arabalar.slice(2)); // 2. indexten itibaren sonuna kadar yazdirir
console.log(arabalar.slice(1, 3)); // ilk index dahil digeri dahil degil

//--------------------CONCAT-----------------------
const birlesik = sayilar.concat(arabalar, [3, 4, 5]);
console.log(birlesik);
