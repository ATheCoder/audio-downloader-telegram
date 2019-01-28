const TelegramBot = require('node-telegram-bot-api')

const bot = new TelegramBot('679094258:AAFbas8wCPiZFXKHGAbr8w-E0kf2tsshSt8', {polling: true})

bot.onText((msg) => {
    if(msg === '/start') return bot.sendMessage(msg.chat.id, 'Hi dude')
    bot.sendAudio(msg.chat.id, msg.text)
})

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
  
    // send a message to the chat acknowledging receipt of their message
    bot.sendAudio(msg.chat.id, '/Users/user1/Downloads/ProgrammingThrowdown_69.mp3')
  });