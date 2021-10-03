var showListe = [];
//! json dosyasindan veri getirme asamalari
fetch("./tv-shows.json")
  .then((cevap) => cevap.json())
  .then((veri) => {
    showListe = veri;
    showIzle(showListe);
  });

function showIzle(showListe) {
  var liste = document.querySelector(".liste");
  showListe.forEach((a) => {
    liste.innerHTML =
      liste.innerHTML +
      `<div class="card col-md-3">
        <img class="card-img-top" src="${a.show.image.medium}" alt="Card image cap">
        <div class="card-body">
          <h5>${a.show.name}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="${a.show.url}" target="_blank" class="btn btn-success">Detaylar</a>
        </div>
      </div>`;
  });
}
