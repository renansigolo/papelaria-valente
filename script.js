var seletor = document.querySelector('.escolas');
var paragrafo = document.querySelector('.resultado p');
var escola01 = document.querySelector('escola01');
var escola02 = document.querySelector('escola02');
var escola03 = document.querySelector('escola03');
var enviar = document.querySelector('#submit');

console.log(seletor);
console.log(paragrafo);

function calcularOrcamento() {

  if (this.value == escola01) {
    document.classList.add('.active');
  } else if (this.value == escola02) {
    document.classList.add('.active');
  } else if (this.value == escola03) {
    document.classList.add('.active');
  }
  console.log(this.value);
}

function alertarEnvio() {
  alert('Sua mensagem foi enviada com sucesso, Obrigado !');
}

seletor.addEventListener('change', calcularOrcamento);

enviar.addEventListener('click', alertarEnvio);
