
## WhatsApp Bot - WPPConnect

Este projeto é um bot simples desenvolvido com [node](https://nodejs.org/pt) e [WPPConnect](https://wppconnect.io). O bot permite enviar mensagens automáticas para um contato específico no WhatsApp em horários definidos.


## ✔ Pré-requisitos

Antes de começar, certifique-se de ter os seguintes itens instalados em sua máquina:

<ul>
    <li>Node.js (versão 14 ou superior)</li>
    <li>WhatsApp instalado no seu dispositivo móvel</li>
</ul>

## 💻 Instalação

1. Clone o repositório

```
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

2. Instale as dependências

```
npm install
```

3. Configure o Bot

<ul>
    <li>Abra o arquivo index.js</li>
    <li>Substitua o número do contato pelo número que deseja enviar mensagens. Certifique-se de usar o formato internacional com @c.us no final:</li>
</ul>

```
const contato = '5581999999999@c.us'; // Substitua pelo número desejado
```
<ul>
    <li>Ajuste a mensagem e o horário conforme necessário:</li>
</ul>

```
const mensagem = 'Bom dia! Essa é uma mensagem automática enviada pelo meu bot.';
const horario = '51 15 * * *'; // Ajuste o horário para 15h51

```

4. Execute o código do bot

```
node index.js

```

obs: na primeira vez que o codigo for executado, será necessário escanear o QR Code para conectar o bot ao whataspp.


## ⌚ Funcionamento do Agendamento

O agendamento das mensagens utiliza a biblioteca [node-schedule](https://www.npmjs.com/package/node-schedule), que segue o formato cron. O cron usado no código define o envio de mensagens no horário escolhido.

## Enviar mensagens para múltiplos contatos

Adicione uma lista de contatos e itere sobre ela para enviar mensagens:

```
const contatos = ['5581999999999@c.us', '5581888888888@c.us'];
contatos.forEach((contato) => {
  client.sendText(contato, mensagem);
});

```

## 🛑 Cuidados

<ul>
    <li>Uso responsável: Não utilize o bot para enviar mensagens não solicitadas (spam). Isso pode levar ao bloqueio do seu número no WhatsApp.</li>
    <li>Limitações: O WhatsApp Web pode limitar a automação de mensagens em excesso.</li>
</ul>



## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir [issues](https://github.com/guedev/series-crud/issues) ou enviar [pull](https://github.com/guedev/series-crud/pulls) requests.


## Licença
Este projeto está licenciado sob a MIT License.
