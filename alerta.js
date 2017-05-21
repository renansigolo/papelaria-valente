// Alerta ao clicar no botão Enviar do formulário de Contato
var enviar = document.querySelector('#submit');

function alertarEnvio() {
  alert('Sua mensagem foi enviada com sucesso, Obrigado !');
}

enviar.addEventListener('click', alertarEnvio);
