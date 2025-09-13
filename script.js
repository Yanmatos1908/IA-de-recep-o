// Obtém o elemento HTML onde a mensagem será exibida
const mensagemDisplay = document.getElementById('mensagem-display');

// Mensagens que serão exibidas
const mensagemBemVindo = "Bem-vindos! Conheçam a IA na segurança.";
const mensagemAdeus = "Obrigado pela visita! Esperamos que tenham gostado.";

// Função para exibir a mensagem de boas-vindas
function exibirBoasVindas() {
    mensagemDisplay.textContent = mensagemBemVindo;
}

// Função para exibir a mensagem de despedida
function exibirAdeus() {
    mensagemDisplay.textContent = mensagemAdeus;
}

// Exibe a mensagem de boas-vindas
exibirBoasVindas();

// Espera 10 segundos (10000 milissegundos) e então exibe a mensagem de adeus
setTimeout(exibirAdeus, 10000);