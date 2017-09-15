// Alerta ao clicar no botão Enviar do formulário de Contato
let enviar = document.querySelector('#submit');

alertarEnvio() => {
  alert('Sua mensagem foi enviada com sucesso, Obrigado !');
}

enviar.addEventListener('click', alertarEnvio);
