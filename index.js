const wppconnect = require('@wppconnect-team/wppconnect');
const schedule = require('node-schedule');

// Configurações do bot
const contato = '559181675404@c.us'; // Número no formato internacional com @c.us no final
const mensagem = 'Bom dia! Essa é uma mensagem automática enviada pelo meu bot guedo.';
const horario = '55 15 * * *'; // Cron para 16h todos os dias

// Inicializa o WPPConnect
wppconnect
  .create({
    session: 'whatsapp-bot', // Nome da sessão
    puppeteerOptions: { headless: true }, // Opção headless para não abrir a interface do navegador
  })
  .then((client) => start(client))
  .catch((error) => {
    console.log('Erro ao iniciar o bot:', error);
  });

// Função principal
function start(client) {
  console.log('Bot iniciado com WPPConnect!');

  // Agenda o envio diário da mensagem
  schedule.scheduleJob(horario, function () {
    client
      .sendText(contato, mensagem)
      .then((result) => {
        console.log('Mensagem enviada com sucesso!', result);
      })
      .catch((error) => {
        console.error('Erro ao enviar mensagem:', error);
      });
  });
}
