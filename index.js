const Telegraf = require('telegraf');
const bot = new Telegraf('1292763139:AAHcUoyovekYdLjvP0ymCKSjze5WtgPvqtw');
bot.start((ctx) => {
    console.log('Id пользователя:', ctx.from.id);
    return ctx.reply('Добро пожаловать!');
  });
  bot.on('message', (msg) => ctx.reply('why not?'));
  bot.hears('hi', (ctx) => ctx.reply('Hey there'));
