// simple echo bot
const { Telegraf } = require('telegraf');

require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.on('message', ctx => {
    ctx.reply(ctx.message.text);
})

console.log('running');
bot.launch();