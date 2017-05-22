<<<<<<< HEAD
var imagensEscolas = document.querySelectorAll('.imagensEscolas');
var bandeirantes = document.querySelector('#bandeirantes');
var objetivo = document.querySelector('#objetivo');
var marista = document.querySelector('#marista');
var escola01 = document.querySelector('.escola01');
var escola02 = document.querySelector('.escola02');
var escola03 = document.querySelector('.escola03');

function adicionarClasse() {

  if (bandeirantes.classList.contains('active') || objetivo.classList.contains('active') || marista.classList.contains('active')) {
    objetivo.classList.remove('active');
    marista.classList.remove('active');
    bandeirantes.classList.remove('active');
  }
    this.classList.add('active');
}

bandeirantes.addEventListener('click', adicionarClasse);
objetivo.addEventListener('click', adicionarClasse);
marista.addEventListener('click', adicionarClasse);
=======
// var seletor = document.querySelector('.escolas');
// var paragrafo = document.querySelector('.resultado p');
//
// console.log(seletor);
// console.log(paragrafo);
//
//
//
// seletor.addEventListener('change', calcularOrcamento);

adImages = ["images/banner1.jpg","images/banner2.jpg"]
thisAd = 0
imgCt = adImages.length

function rotate() {
  if (document.images) {
    thisAd++
    if (thisAd == imgCt) {
      thisAd = 0
    }
    document.adBanner.src=adImages[thisAd]
    setTimeout("rotate()", 2 * 1000)

  }

}
>>>>>>> 4d10515120b91dcc793a9652e18f69a4b3368cd0
