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

  if (bandeirantes.classList.contains('active')) {
    escola01.classList.remove('hidded');
    escola02.classList.add('hidded');
    escola03.classList.add('hidded');
  } else if (objetivo.classList.contains('active')) {
    escola02.classList.remove('hidded');
    escola01.classList.add('hidded');
    escola03.classList.add('hidded');
  } else if (marista.classList.contains('active')) {
    escola03.classList.remove('hidded');
    escola01.classList.add('hidded');
    escola02.classList.add('hidded');
  }
}

bandeirantes.addEventListener('click', adicionarClasse);
objetivo.addEventListener('click', adicionarClasse);
marista.addEventListener('click', adicionarClasse);

// Slider do banner
adImages = ["images/banner1.jpg", "images/banner2.jpg", "images/banner3.jpg"];
thisAd = 0;
imgCt = adImages.length;

function rotate() {
  if (document.images) {
    thisAd++;
    if (thisAd == imgCt) {
      thisAd = 0;
    }
    document.adBanner.src = adImages[thisAd];
    setTimeout("rotate()", 3000);
  }
}
