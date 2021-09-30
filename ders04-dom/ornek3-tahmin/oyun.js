// bilgisayar 1-20 arasinda bir sayi tut
let rastgeleSayi = Math.floor(Math.random() * 20 + 1);
let puanPc = 10;
let rekorPc = 0;
//her kontrol et butonuna tikladigimda calistirdim
document.querySelector(".kontrol").onclick = function () {
  const tahmin = document.querySelector(".tahmin").value;
  if (tahmin == rastgeleSayi) {
    //tahminim doğruysa
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".question").textContent = rastgeleSayi;
    let mesaj = (document.querySelector(".mesaj").textContent =
      "Tebrikler Bildiniz");

    if (puanPc > rekorPc) {
      //rekoru güncelle
      rekorPc = puanPc;
      document.querySelector(".rekor-skor").textContent = puanPc;
    }
  } else {
    //tahminim yanlış ise
    if (puanPc > 1) {
      puanPc--;
      let mesaj = document.querySelector(".mesaj");
      tahmin < rastgeleSayi
        ? (mesaj.textContent = "Arttır⬆️")
        : (mesaj.textContent = "Azalt⬇️");
      document.querySelector(".skor").textContent = puanPc;
    } else {
      let mesaj = document.querySelector(".mesaj");
      mesaj.textContent = "Oyunu kaybettiniz";
      document.querySelector(".skor").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
};
//tekrar butonuna basıldığında başlangıç değerleri yüklensin
document.querySelector(".tekrar").onclick = () => {
  rastgeleSayi = Math.floor(Math.random() * 20 + 1);
  document.querySelector("body").style.backgroundColor = "rgb(5, 37, 37)";
  document.querySelector(".question").textContent = "?";
  document.querySelector(".mesaj").textContent = "Tahmine Başlanıyor!";
  puanPc = 10;
  document.querySelector(".skor").textContent = puanPc;
  document.querySelector(".tahmin").value = "";
};
//klavyeden tuşa basıldığında çalış
document.querySelector(".tahmin").onkeydown = function (klavye) {
  if (klavye.keyCode == 13) {
    document.querySelector(".kontrol").onclick();
  }
};
