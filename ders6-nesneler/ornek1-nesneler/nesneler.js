//todo-----------------NESNELER----------------------
//diziler sirali bellek bolgeleridir. dolayisiyla erisim
//indexle olur. eger diziler karisiksa(nesne) indexle erisim
//guclugu ortaya cikar bu yuzden=>-...............

//! OBJECT (nesne)
/* nesnelerde key-value (property-value) yapisi kullanilir
nesnelerde aradigimiz veriye erismek icin key adini kullanmamiz 
gerekir*/
const insan = {
  ad: "kenan",
  soyad: "Kul",
  yas: 30,
  meslek: "developer",
  diller: ["java", "js", "sql", "html"],
};

console.log(insan);

//1.yontem
console.log(insan.ad);
//2.yontem
console.log(insan["ad"]);
console.log(insan["diller"]);

console.log(`Adım ${insan.ad} ve yaşım: ${insan.yas}`);

//? objeye key valueler ekleme
insan.konum = "Türkiye";
insan.email = "insan@hotmail.com";
insan["dogumTarihi"] = 1991;

console.log(insan);

//todo------------NESNE METHODLARI------------
const kisi = {
  ad: "Merve",
  soyad: "Aslan",
  dogumTarihi: 1990,
  meslek: "tester",
  tool: "selenium",
  ehliyet: true,
  yasHesapla: function () {
    return new Date().getFullYear() - this.dogumTarihi;
  },
  ozet: function () {
    return `${this.ad}${this.soyad}${this.yasHesapla()}yasindadir`;
  },
};

console.log(kisi);
console.log(kisi.yasHesapla());
console.log(kisi.ozet());

//nesne (object) iterasyon ornekleri
const people = [
  {
    ad: "hakan",
    soyad: "inal",
    meslek: "developer",
    yas: 41,
  },
  {
    ad: "said",
    soyad: "can",
    meslek: "tester",
    yas: 37,
  },
  {
    ad: "kubilay",
    soyad: "tuncel",
    meslek: "team lead",
    yas: 33,
  },
  {
    ad: "osman",
    soyad: "türker",
    meslek: "grafiker",
    yas: 29,
  },
  {
    ad: "huseyin",
    soyad: "harran",
    meslek: "developer",
    yas: 32,
  },
];
console.log(people);

//ornek1: people dizisindeki kisilerin mesleklerini konsolda yazdir
people.forEach((x) => console.log(x.meslek));
//ornek2:dizideki tum kisilerin yaslarini 1 arttirarak yazdir
people.map((x) => x.yas + 1).forEach((x) => console.log(x));
//ornek3:yasi 35 veya kucuk olanlarin adini yazdir
people.filter((x) => x.yas <= 35).forEach((x) => console.log(x.ad));
//ornek4:dizideki kisilerin isimlerini buyuk harf olarak alan ve
// 5 arttiran ve soyadinin ilk 2 harfini yazdiran fonksiyonu yazin
const degisiklik = people
  .map((x) => {
    return {
      ad: x.ad.toUpperCase(),
      yas: x.yas + 5,
      soyad: x.soyad.slice(0, 2),
    };
  })
  .forEach((x) => console.log(x));

//ornek5:meslegi developer olanlarin isim ve yaslarini yazdir
people.filter((x) => x.meslek == "developer").forEach((x) => console.log(x.ad)); //! == yazman lazim
