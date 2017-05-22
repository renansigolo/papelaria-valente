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
