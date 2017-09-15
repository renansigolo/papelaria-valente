// Alerta ao clicar no botão Enviar do formulário de Contato
let enviar = document.querySelector('#submit');

let alertarEnvio = () => {
  alert('Sua mensagem foi enviada com sucesso, Obrigado !');
};

enviar.addEventListener('click', alertarEnvio);
